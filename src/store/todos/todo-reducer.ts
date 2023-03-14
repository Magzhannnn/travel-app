import { OtherTodoAction } from "./../../types/todos";
import {
  FetchTodoAction,
  TodoActionTypes,
  TodoState,
  Todos,
} from "../../types/todos";

const initialState: TodoState = {
  loading: false,
  todos: [],
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: FetchTodoAction | OtherTodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { loading: true, error: null, todos: [] };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case TodoActionTypes.REMOVE_TODO: {
      const todos: Todos[] = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos };
    }
    default:
      return state;
  }
};
