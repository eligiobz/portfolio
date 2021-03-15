import React from "react";
import Button from "./Button";

function ButtonSet(props) {
  const buttons = [
    { kkey: "w", soundPath: "./sounds/drumMachine/crash.mp3" },
    { kkey: "a", soundPath: "./sounds/drumMachine/kick-bass.mp3" },
    { kkey: "s", soundPath: "./sounds/drumMachine/snare.mp3" },
    { kkey: "d", soundPath: "./sounds/drumMachine/tom-1.mp3" },
    { kkey: "j", soundPath: "./sounds/drumMachine/tom-2.mp3" },
    { kkey: "k", soundPath: "./sounds/drumMachine/tom-3.mp3" },
    { kkey: "l", soundPath: "./sounds/drumMachine/tom-4.mp3" },
  ];

  return (
    <div className="drumSet">
      {buttons.map((button) => {
        return (
          <Button
          key={Button.kkey}
            kkey={button.kkey}
            soundPath={button.soundPath}
          />
        );
      })}
    </div>
  );
}

export default ButtonSet;
