import React from "react";
import ListItems from "./ListItem";
import Button from "./Button";
import Input from "./Input";

function App() {

  const [item, setItem] = React.useState("");
  const [listItem, setListItem] = React.useState([]);

  
  function handleInput(event) {
    const newItem = event.target.value;
    setItem(newItem)
    console.log(newItem);
  }

  function addItem() {
    setListItem([...listItem, item])
    console.log(listItem);
  }
  

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}
          {/* <li>code something</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
