import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={() => {
        props.onWrite(event);
      }
      } type="text" 
      value={props.inputText} />
      <button onClick={() => { props.clickButton(); }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
