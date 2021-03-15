import { React, useState } from "react";

function Control(props) {
  const baseBeat = 1000;
  const baseTime = 60;
  const [cTime, setCTime] = useState("-1");

  function updateTime(event) {
    const { value, name } = event.target;
    setCTime(value);
    console.log(props.kkey + " " + cTime);
    if (cTime >= 0) {
      setInterval(props.sound, cTime * (baseBeat * baseTime));
      console.log(cTime * (baseBeat * baseTime));
    }
  }
  document.addEventListener("keydown", function (event) {
    if (props.kkey === event.key) {
      props.playSound(props.kkey);
      return;
    }
  });

  return (
    <div>
      <label className="drumSpeed" htmlFor={"speed" + props.kkey}>
        Time
      </label>
      <input
        // onChange={updateTime}
        className="drumSpeed"
        value={cTime}
        type="number"
        id={"speed" + props.kkey}
      />
    </div>
  );
}

export default Control;
