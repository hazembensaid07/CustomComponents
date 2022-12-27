import React, { useState } from "react";
import downicon from "../../assets/icons/arrow-down.svg";
import upicon from "../../assets/icons/arrow-up.svg";
const AccordionElement = ({ el }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <li className="accordion-item">
      <div className="accordion-toggle" onClick={() => setIsActive(!isActive)}>
        <span>{el.heading}</span>
        <span>
          {isActive ? (
            <img src={downicon} alt="icon" />
          ) : (
            <img src={upicon} alt="icon" />
          )}
        </span>
      </div>
      {isActive && <div className="accordion-content">{el.content}</div>}
    </li>
  );
};

export default AccordionElement;
