import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";

export const EditingTodoForm = ({ updateTodo, todo, onCancelEditing }) => {
  const [value, setValue] = useState(todo.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && value !== "") {
      updateTodo(todo.id, value);
    }
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          onCancelEditing(todo.id);
        }}
        className="todo-btn"
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
    </form>
  );
};
