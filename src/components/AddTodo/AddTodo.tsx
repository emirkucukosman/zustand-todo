import React from "react";

// Hooks
import { useStore } from "../../hooks/useStore";

export const AddTodo = () => {
  const { addTodo } = useStore();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.currentTarget.elements as any).todo;
    const todo = input.value;
    if (todo) {
      input.value = "";
      addTodo(todo);
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleAddTodo}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter your todo here..."
        className="input"
      />
      <button type="submit" className="add-todo-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </form>
  );
};
