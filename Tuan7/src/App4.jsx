import React from "react";
import TodoLIst from "./components/TodoLIst";
import TodoInput from "./components/TodoInput";

export default function App4() {
  return (
    <div>
      <h2>Todo List Global</h2>
      <TodoInput />
      <TodoLIst />
    </div>
  );
}
