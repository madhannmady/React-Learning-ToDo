import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItems = ({ addItems, setAddItems, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Type to add item"
        required
        value={addItems}
        onChange={(e) => setAddItems(e.target.value)}
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItems;
