import React from "react";
import Button from "./Button";
import Input from "./Input";

function Register() {
  return  <div>
    <form className="form">
    <Input 
    type="text"
    placeholder="Username"
    />
    <Input 
    type="password"
    placeholder="Password"
    />
    <Input 
    type="password"
    placeholder="Confirm Password"
    />
    <Button 
    button="Button"/>
    </form>
  </div>
  
}

export default Register;