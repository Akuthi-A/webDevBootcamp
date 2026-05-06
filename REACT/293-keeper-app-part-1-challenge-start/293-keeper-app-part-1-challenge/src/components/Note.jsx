import React from "react";

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
function Note() {
    return <div className="note" contentEditable="true">
        <h1>Note title</h1>
        <p>Note content</p>
    </div>
}

export default Note;