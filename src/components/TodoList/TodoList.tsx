import React from "react";

// Hooks
import { useStore } from "../../hooks/useStore";

// Components
import { TodoItem } from "../TodoItem";

export const TodoList = () => {
  const todos = useStore((state) => state.todos);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
