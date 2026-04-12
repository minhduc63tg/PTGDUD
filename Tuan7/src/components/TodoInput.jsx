import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms/todoAtom";

export default function TodoInput() {
  const [text, setText] = useState("");
  const setTodos = useSetRecoilState(todoState);

  const handleAdd = () => {
    if (!text.trim()) return;
    setTodos((oldTodos) => [
      ...oldTodos,
      { id: Date.now(), text, completed: false },
    ]);

    setText("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
}
