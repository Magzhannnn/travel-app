import { RootState } from "../rootReducer";

export const selectAllTodos = (state: RootState) => state.todo;
export const selectTodosLength = (state: RootState) => state.todo.todos.length;
