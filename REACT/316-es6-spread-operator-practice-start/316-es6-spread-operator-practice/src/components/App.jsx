import React from "react";


function App() {

  const [item, setItem] = React.useState("");
  const [listItem, setListItem] = React.useState([]);

  
  function handleInput(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addItem() {
    setListItem([...listItem, item]);
    setItem("");
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
        </ul>
      </div>
    </div>
  );
}

export default App;
