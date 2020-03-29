/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onCreateDirectionReport = /* GraphQL */ `
  subscription OnCreateDirectionReport {
    onCreateDirectionReport {
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
export const onUpdateDirectionReport = /* GraphQL */ `
  subscription OnUpdateDirectionReport {
    onUpdateDirectionReport {
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
export const onDeleteDirectionReport = /* GraphQL */ `
  subscription OnDeleteDirectionReport {
    onDeleteDirectionReport {
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
