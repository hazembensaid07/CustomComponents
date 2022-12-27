import React, { useState, useEffect } from "react";
import "./Switch.css";
//props onToggleState : function to move the switch state : switch state opened closed
const Switch = ({ onToggleState, ...props }) => {
  const [state, setState] = useState(props.state);

  useEffect(() => {
    setState(props?.state);
  }, [props.state]);

  return (
    <>
      <div
        className={`switch ${state ? "switchOn" : "switchOff"}`}
        onClick={async () => {
          await onToggleState();
          setState(!state);
        }}
      >
        <div className="switchbtn"></div>
      </div>
    </>
  );
};

export default Switch;
