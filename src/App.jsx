import { useState } from "react";
import { NewTodoForm } from "./NewTodoform";
import "./App.css";

export default function App() {
  const [newItem, setNewItem] = useState(""); // Changed variable name to newItem
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <>
      {/* You need to create a NewTodoForm component and pass the addTodo function to it */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">ToDo List</h1>
      <ul className="List">
        {todos.length === 0 && <p>No Todos</p>} {/* Changed "No Todos" to a paragraph */}
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                  onChange={() => toggleTodo(todo.id, !todo.completed)} /* Updated the toggleTodo function */
              />
              {todo.title}
            </label>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}


