import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../atoms/todoAtom";

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoState);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const hanleUpdate = () => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...t, text } : t)));

    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={hanleUpdate}>Lưu</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Sửa</button>
        </>
      )}

      <button onClick={handleDelete}>Xóa</button>
    </div>
  );
}
