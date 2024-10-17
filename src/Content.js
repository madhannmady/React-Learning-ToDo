// import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const Content = ({ items, length, handleCheckboxChange, handleDelete }) => {
  return (
    <main>
      <h3 className="content-h3">Total: {length}</h3>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheckboxChange(item.id)}
              >
                {item.text}
              </label>
              <FiTrash2
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h2 style={{ textAlign: "center" }}>No items to display.</h2>
        </div>
      )}
    </main>
  );
};

export default Content;
