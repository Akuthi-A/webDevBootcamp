import React from "react";
import Input from "./Input";
import Login from "./Login";


var isLoggedIn = false;

function App(props) {
  return (
    <div className="container">

      {isLoggedIn? <h1>Hello</h1> : <Login />}
          
    </div>
  );
}

export default App;
