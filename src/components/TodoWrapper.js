import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { EditingTodoForm } from "./EditingTodoForm";
import { v4 } from "uuid";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
    setTodos(savedTodos);
  }, []);
  const addTodo = (todo) => {
    const savedTodos = [
      ...todos,
      { id: v4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  };
  const handleDelete = (id) => {
    const savedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  };
  const handleToggleStatus = (id) => {
    const savedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  };
  const handleEditing = (id) => {
    const savedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: true } : todo
    );
    setTodos(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  };
  const handleCancelEditing = (id) => {
    const savedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: false } : todo
    );
    setTodos(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  };
  const handleUpdateTodo = (id, task) => {
    const savedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: task, isEditing: false } : todo
    );
    setTodos(savedTodos);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  };
  return (
    <div className="TodoWrapper">
      <h1>Afril's Todo-list App</h1>
      <TodoForm addTodo={addTodo} />
      {todos?.map((todo, index) =>
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
