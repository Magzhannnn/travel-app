import axios from "axios";
import { Dispatch } from "redux";
import { FetchTodoAction, TodoActionTypes, Todos } from "../../types/todos";

export const addTodo = (todo: Todos) => ({
  type: TodoActionTypes.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: number) => ({
  type: TodoActionTypes.REMOVE_TODO,
  payload: id,
});

export const fetchTodos = (limit: number) => {
  return async (dispatch: Dispatch<FetchTodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _limit: limit },
        }
      );
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
      //   setTimeout(() => {
      //     dispatch({
      //       type: TodoActionTypes.FETCH_TODOS_SUCCESS,
      //       payload: response.data,
      //     });
      //   }, 600);
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: "Произошло ошибка при загрузки списка!",
      });
    }
  };
};
