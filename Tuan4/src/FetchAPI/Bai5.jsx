import React, { useEffect, useState } from "react";
import "../Bai4.css";

const url = "https://698583ec6964f10bf2535e5f.mockapi.io/api/v1/todos";
function TodosDemo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Lỗi load data");
        }
        const data = await res.json();
        setTodos(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setIsSubmiting(true);
    setError(null);

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: inputValue,
          completed: false,
        }),
      });
      if (!res.ok) {
        throw new Error("Không thể thêm task");
      }
      const newTodo = await res.json();
      setTodos((pre) => [...pre, newTodo]);
      setInputValue("");
    } catch (err) {
      setError(err.mesage);
    } finally {
      setIsSubmiting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa")) return;

    setIsSubmiting(true);
    try {
      const res = await fetch(`${url}/${id}`, { method: "DELETE" });
      if (!res.ok) {
        throw new Error("Xóa thất bại");
      }
      setTodos((pre) => pre.filter((x) => x.id !== id));
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <div className="container">
      <h1>Todos</h1>
      <form action="" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isSubmiting}
          placeholder="Việc cần làm..."
        />

        <button type="submit" disabled={isSubmiting}>
          {isSubmiting ? "Đang xử lý" : "Thêm"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button onClick={() => handleDelete(todo.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodosDemo;
