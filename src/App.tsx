import React from "react";

// Components
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div className="container">
      <h1 className="title">Zustand Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};
