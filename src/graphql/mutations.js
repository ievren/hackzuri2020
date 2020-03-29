/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      detChef
      reports {
        items {
          id
          time
          fromPlace
          toPlace
        }
        nextToken
      }
      kilometer
      liter
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      detChef
      reports {
        items {
          id
          time
          fromPlace
          toPlace
        }
        nextToken
      }
      kilometer
      liter
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      detChef
      reports {
        items {
          id
          time
          fromPlace
          toPlace
        }
        nextToken
      }
      kilometer
      liter
    }
  }
`;
export const createDirectionReport = /* GraphQL */ `
  mutation CreateDirectionReport(
    $input: CreateDirectionReportInput!
    $condition: ModeldirectionReportConditionInput
  ) {
    createDirectionReport(input: $input, condition: $condition) {
      id
      time
      fromPlace
      toPlace
      todo {
        id
        name
        description
        detChef
        reports {
          nextToken
        }
        kilometer
        liter
      }
    }
  }
`;
export const updateDirectionReport = /* GraphQL */ `
  mutation UpdateDirectionReport(
    $input: UpdateDirectionReportInput!
    $condition: ModeldirectionReportConditionInput
  ) {
    updateDirectionReport(input: $input, condition: $condition) {
      id
      time
      fromPlace
      toPlace
      todo {
        id
        name
        description
        detChef
        reports {
          nextToken
        }
        kilometer
        liter
      }
    }
  }
`;
export const deleteDirectionReport = /* GraphQL */ `
  mutation DeleteDirectionReport(
    $input: DeleteDirectionReportInput!
    $condition: ModeldirectionReportConditionInput
  ) {
    deleteDirectionReport(input: $input, condition: $condition) {
      id
      time
      fromPlace
      toPlace
      todo {
        id
        name
        description
        detChef
        reports {
          nextToken
        }
        kilometer
        liter
      }
    }
  }
`;
