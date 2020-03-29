import React, { useEffect, useReducer } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createTodo } from './src/graphql/mutations';
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

  return (
    <View style={styles.container}>
      
      <Button onPress={createNewTodo} title='Create Todo' />
  { state.todos.map((todo, i) => <Text key={todo.id}>{todo.name}: - DetChef: {todo.detChef} [{todo.description}]  {todo.reports.map((report, i) => <Text key={report.id}>({report.time}: {report.fromPlace} -> {report.toPlace})</Text>)} </Text>) }
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