import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


function createEntry(emoji) {
  return <Entry 
          key={emoji.id}
          id={emoji.id}
          emojiPic={emoji.emoji}
          emojiDesc={emoji.name}
          emojiDefine={emoji.meaning}
  />

}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      
      <dl className="dictionary">
        {/* <Entry 
          emojiPic="💪"
          emojiDesc="Tense Biceps"
          emojiDefine="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      /> */}

      {emojipedia.map(createEntry)}


        
      </dl>
    </div>
  );
}

export default App;
