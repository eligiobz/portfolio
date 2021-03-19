import React from "react";
import Control from "./Control";

function Button(props) {
  function playSound(kkey) {
    const audioEl = document.getElementById(kkey);
    audioEl.play();
  }

  return (
    <div style={{ display: "inline-block" }}>
      <button
        onClick={() => {
          playSound(props.kkey);
        }}
        className={"drum drum" + props.kkey.toUpperCase()}
      >
        {props.kkey}
      </button>
      <audio id={props.kkey}>
        <source src={props.soundPath}></source>
      </audio>
      <Control kkey={props.kkey} playSound={playSound} />
    </div>
  );
}

export default Button;
