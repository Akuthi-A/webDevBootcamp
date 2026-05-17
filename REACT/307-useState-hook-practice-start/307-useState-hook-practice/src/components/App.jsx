import React from "react";

function App() {
  //Challenge:
//1. Given that you can get the current time using:
  let time = new Date().toLocaleTimeString();
  console.log(time);

//Show the latest time in the <h1> when the Get Time button
//is pressed.
  const [currentTime, setTime] = React.useState(time);
  
  function showTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  //2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

  setInterval(showTime, 1000)

  
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
