import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItems = ({ addItems, setAddItems, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Type to add item"
        required
        value={addItems}
        onChange={(e) => setAddItems(e.target.value)}
      />
      <button type="submit" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItems;
