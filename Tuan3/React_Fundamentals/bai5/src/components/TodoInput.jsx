import React from "react";
import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  return (
    <div className="todo-input">
      <input
        type="text"
        value={text}
        placeholder="Nhập công việc.."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
