import React from "react";

function ToDoItem(props) {

    function handleClick() {
        setIsDone(prevValue => {
            return !prevValue
        })

    }


    return <div onClick= {() => {
        props.onChecked(props.id)
    }}>
        <li >{props.item}</li>
    </div>
}


export default ToDoItem;