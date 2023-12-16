import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todo, onDelete, onEditing, onToggleStatus }) => {
  return (
    <div className="Todo">
      <p className={todo.completed ? "completed" : ""}>{todo.task}</p>
      <div>
        {todo.completed ? (
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faCircleExclamation}
            onClick={() => {
              onToggleStatus(todo.id);
            }}
          />
        ) : (
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faCircleCheck}
            onClick={() => {
              onToggleStatus(todo.id);
            }}
          />
        )}

        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faPenSquare}
          onClick={() => {
            onEditing(todo.id);
          }}
        />
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faTrash}
          onClick={() => {
            onDelete(todo.id);
          }}
        />
      </div>
    </div>
  );
};
