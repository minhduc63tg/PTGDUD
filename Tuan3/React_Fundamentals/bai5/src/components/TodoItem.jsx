import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li className="todo-item">
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
