import React from "react";
import Button from "./Button";
import Input from "./Input";

function Login() {
  return <div>
    <form className="form">
    <Input 
    type="text"
    placeholder="Username"
    />
    <Input 
    type="password"
    placeholder="Password"
    />
    <Button 
    button="Login"/>
    </form>
  </div>
}

export default Login;