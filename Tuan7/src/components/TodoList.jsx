import React from "react";
import { useRecoilValue } from "recoil";
import { todoState } from "../atoms/todoAtom";
import TodoItem from "./TodoItem";

export default function TodoLIst() {
  const todos = useRecoilValue(todoState);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
