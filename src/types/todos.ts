export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  loading: boolean;
  error: null | string;
  todos: Todos[];
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

interface fetchTodos {
  type: TodoActionTypes.FETCH_TODOS;
}

interface fetchTodosSuccess {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: Todos[];
}

interface fetchTodosError {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

export type FetchTodoAction = fetchTodos | fetchTodosError | fetchTodosSuccess;

interface addTodo {
  type: TodoActionTypes.ADD_TODO;
  payload: Todos;
}

interface removeTodo {
  type: TodoActionTypes.REMOVE_TODO;
  payload: number;
}

export type OtherTodoAction = addTodo | removeTodo;
