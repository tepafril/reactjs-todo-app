import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { EditingTodoForm } from "./EditingTodoForm";
import { v4 } from "uuid";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: v4(), task: todo, completed: false, isEditing: false },
    ]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };
  const handleCancelEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };
  const handleUpdateTodo = (id, task) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: task, isEditing: false } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Afril's Todo-list App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditingTodoForm
            updateTodo={handleUpdateTodo}
            onCancelEditing={handleCancelEditing}
            todo={todo}
            key={index}
          />
        ) : (
          <Todo
            todo={todo}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDelete}
            onEditing={handleEditing}
            key={index}
          />
        )
      )}
    </div>
  );
};
