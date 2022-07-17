import create from "zustand";

interface TodoState {
  todos: { id: number; text: string; isCompleted: boolean }[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const useStore = create<TodoState>()((set) => ({
  todos: [],
  addTodo(text) {
    set((state) => ({
      todos: [...state.todos, { id: state.todos.length, text, isCompleted: false }],
    }));
  },
  toggleTodo(id) {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  },
  deleteTodo(id) {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));
