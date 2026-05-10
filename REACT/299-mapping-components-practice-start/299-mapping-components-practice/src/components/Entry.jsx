import React from "react";

function Entry(props) {
  return <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emojiPic}
            </span>
            <span>{props.emojiDesc}</span>
          </dt>
          <dd>
            {props.emojiDefine}
          </dd>
        </div>
}

export default Entry;