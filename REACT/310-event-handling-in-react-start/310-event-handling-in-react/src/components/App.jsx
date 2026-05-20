import React, { useState } from "react";





function App() {
const [onMouseOver, setOnMouseOver] = useState(false);
function handleOnMouseOver() {
  setOnMouseOver(true);
}

function moveOut() {
  setOnMouseOver(false);
}


  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{background: onMouseOver? "black":"white"}}
      onMouseOver={handleOnMouseOver}
      onMouseOut={moveOut}
      >Submit</button>
    </div>
  );
}

export default App;
