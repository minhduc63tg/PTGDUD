import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoLisst";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (text) => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="container">
      <h2>Todo List</h2>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
