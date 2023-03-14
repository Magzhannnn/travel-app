import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/todos/todo-actions";
import { Todos } from "../../types/todos";
import Button from "../../UI/Button/Button";
import Container from "../../UI/Container/Container";
import styles from "./Todos.module.css";

interface TodoItemProps {
  todo: Todos;
  index: number;
}

const TodoItem: FC<TodoItemProps> = ({ todo, index }) => {
  const [check, setCheck] = useState<boolean>(todo.completed);
  const dispatch: any = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  };

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div className={styles.todo_item}>
      <div>
        <strong>{index}</strong>. {todo.title}
        <input type="checkbox" checked={check} onChange={changeHandler} />
      </div>
      <Button title="Remove" onClick={deleteHandler} />
    </div>
  );
};

export default TodoItem;
