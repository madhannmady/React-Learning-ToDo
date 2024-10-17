import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItems from "./AddItems";
import SearchItem from "./SearchItem";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      text: "Buy groceries",
    },
  ]);

  //to get the data from the form
  const [addItems, setAddItems] = useState("");

  //to search a list
  const [search, setSearch] = useState("");

  const addNewItem = (text) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNew = { id, checked: false, text };
    const listItems = [...items, addNew];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));
  };

  // Handle item deletion
  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    localStorage.setItem("todo_list", JSON.stringify(filteredItems));
  };

  //Handle Submitted data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addItems) return;
    addNewItem(addItems);
    setAddItems("");
  };

  return (
    <div className="App">
      <Header title={"Madhan's List"} />
      <AddItems
        addItems={addItems}
        setAddItems={setAddItems}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        length={items.length}
        items={items.filter((item) =>
          item.text.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheckboxChange={handleCheckboxChange}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
