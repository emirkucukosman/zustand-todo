import React from "react";

// Hooks
import { useStore } from "../../hooks/useStore";

// Props
type TodoItemProps = {
  todo: { id: number; text: string; isCompleted: boolean };
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useStore();

  const handleToggleTodo = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <div className="todo-item-actions">
        <button className="action-btn" onClick={handleToggleTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {todo.isCompleted ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            )}
          </svg>
        </button>
        <button className="action-btn" onClick={handleDeleteTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ff0000"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
