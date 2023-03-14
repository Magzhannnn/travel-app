import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos } from "../../store/todos/todo-actions";
import {
  selectAllTodos,
  selectTodosLength,
} from "../../store/todos/todo-selectors";
import { Todos } from "../../types/todos";
import Button from "../../UI/Button/Button";
import Container from "../../UI/Container/Container";
import Input from "../../UI/Input/Input";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

const TodoList = () => {
  const [title, setTitle] = useState<string>("");

  const { todos, loading, error } = useSelector(selectAllTodos);
  const todosLength = useSelector(selectTodosLength);
  const dispatch: any = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const todoInputData = title.trim();

    if (todoInputData.length === 0) alert("Вы ничего не добавили!");
    else {
      const todo: Todos = {
        userId: Math.floor(todosLength / 20 + 1),
        id: todosLength + 1,
        completed: false,
        title,
      };

      dispatch(addTodo(todo));
    }

    setTitle("");
  };

  useEffect(() => {
    dispatch(fetchTodos(15));
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  if (loading) return <h1 className={styles.todo_loading}>Loading...</h1>;

  if (error) return <h1 className={styles.todo_error}>{error}</h1>;

  return (
    <Container className={styles.todo_list}>
      <div className={styles.todo_header}>
        <Input
          title="Input todo"
          type="text"
          value={title}
          onChange={changeHandler}
        />
        <Button title="Add Todo" onClick={clickHandler} />
      </div>
      {todos.length ? (
        todos.map((todo, index) => (
          <TodoItem
            key={`user_${todo.userId}_${todo.id}`}
            todo={todo}
            index={index + 1}
          />
        ))
      ) : (
        <h1 className={styles.todo_empty}>Нет никаких списков!!!</h1>
      )}
    </Container>
  );
};

export default TodoList;
