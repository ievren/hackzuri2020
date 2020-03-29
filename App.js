import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTodo, createDirectionReport } from './src/graphql/mutations';
import { listTodos } from './src/graphql/queries';
import { onCreateTodo } from './src/graphql/subscriptions';

import config from './aws-exports'
API.configure(config)             // Configure Amplify
PubSub.configure(config)

async function createNewTodo() {
  const todo = {  name: "Uftrag 1001" , 
                  description: "Masken bringen",
                  detChef: "Wm Matter",};
  await API.graphql(graphqlOperation(createTodo, { input: todo }))
}

async function createNewReport() {
  const report = {  time: 1200,
                    fromPlace: "Mudon",
                    toPlace: "Zurich",
                    directionReportTodoId: "976659ab-e578-46a4-8127-fb98273a5f0e"};
  await API.graphql(graphqlOperation(createDirectionReport, { input: report }))
}

const initialState = {todos:[]};
const reducer = (state, action) =>{
  switch(action.type){
    case 'QUERY':
      return {...state, todos:action.todos}
    case 'SUBSCRIPTION':
      return {...state, todos:[...state.todos, action.todo]}
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getData()

    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (eventData) => {
        const todo = eventData.value.data.onCreateTodo;
        dispatch({type:'SUBSCRIPTION', todo})
      }
    })
    return () => subscription.unsubscribe()
  }, [])

  async function getData() {
    const todoData = await API.graphql(graphqlOperation(listTodos))
    dispatch({type:'QUERY', todos: todoData.data.listTodos.items});
  }
  console.log(state);

  return (
    <View style={styles.container}>
      
      <Button onPress={createNewTodo} title='Create Todo' />
  { state.todos.map((todo, i) => <Text key={todo.id}>{todo.name}: - DetChef: {todo.detChef} [{todo.description}] <Button onPress={createNewReport} title='Create Report' /></Text>) }

    </View>
  );
}

const styles = StyleSheet.create({
   container: {
     backgroundColor: '#ddeeff',
     alignItems: 'center',
     justifyContent: 'center',
     flex: 1
   }
 });