import React, { useState } from "react";
import "./NewTodoForm.css"; // Import your CSS file

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item" className="form-label">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          name="item"
          id="item"
          className="form-input"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}


