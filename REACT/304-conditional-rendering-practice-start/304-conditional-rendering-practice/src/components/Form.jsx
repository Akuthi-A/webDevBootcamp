import React from "react";
import Login from "./Login";
import Register from "./Register";

function Form(props) {
  return (
    <form className="form">
      {userIsRegistered? <Login /> : <Register />}
    </form>
  );
}



export default Form;
