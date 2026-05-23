import React from "react";

function App() {

  const [fullname, setFullname] = React.useState({
    fname: "",
    lname: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullname(prevValue => {
      if (inputName === "fName") {
        return {
          fname: newValue,
          lname: prevValue.lname
        }
      } else if (inputName === "lName") {
        return {
          fname: prevValue.fname,
          lname: newValue
        }
      }
    });
  }



  return (
    <div className="container">
      <h1>Hello {fullname.fname} {fullname.lname}</h1>
      <form>
        <input 
        onChange={handleChange}
        name="fName" 
        placeholder="First Name" 
        value={fullname.fname}
        />
        <input
        onChange={handleChange}
         name="lName" 
         placeholder="Last Name" 
         value={fullname.lname}
         />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
