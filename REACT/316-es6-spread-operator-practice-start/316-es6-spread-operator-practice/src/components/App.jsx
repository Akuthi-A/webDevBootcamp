import React from "react";


function App() {

  const [item, setItem] = React.useState("");
  const [listItem, setListItem] = React.useState([]);
  const [isDone, setDone] = React.useState(false);

  
  function handleInput(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addItem() {
    setListItem([...listItem, item]);
    setItem("");
  }

  function handleDoneTask() {
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
            <li key={item} style={{
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
            }}>
             <span>{item}</span> 

              <button onClick={handleDoneTask}>
                <span>done</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default App;


// style={{ textDecoration: isDone ? 'line-through' : 'none' }}
