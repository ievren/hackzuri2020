/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDirectionReport = /* GraphQL */ `
  query GetDirectionReport($id: ID!) {
    getDirectionReport(id: $id) {
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
export const listDirectionReports = /* GraphQL */ `
  query ListDirectionReports(
    $filter: ModeldirectionReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDirectionReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        time
        fromPlace
        toPlace
        todo {
          id
          name
          description
          detChef
          kilometer
          liter
        }
      }
      nextToken
    }
  }
`;
