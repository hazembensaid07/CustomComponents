import React from "react";
import "./CustomButton.css";
const CustomButton = ({ ...props }) => {
  //props styled: style of button type: icon type size button size onclick function to trigger onclick icon svg icon downloaded from figma ui  title: button title
  // the iconsize depends on the button size s,xs 12px m 18 px l 24 px
  const iconsize =
    ((props.size === "xs" || props.size === "s") && "12px") ||
    (props.size === "m" && "18px") ||
    (props.size === "l" && "24px");
  return (
    <div
      className={`btn ${props.styled} ${props.type} ${props.size}`}
      onClick={props.onClick}
    >
      {/*  if type of icon is leading-icon put the icon  */}
      {props.type === "leading-icon" && (
        <img src={props.icon} alt="icon" width={iconsize} />
      )}
      {/* trailing  at the end 
          leading at the start of element
          round: round icon button 
          square : square icon button 
          basic without icon
      */}
      {(props.type === "basic" ||
        props.type === "trailing-icon" ||
        props.type === "leading-icon") && <div>{props.title}</div>}
      {(props.type === "round-icon" ||
        props.type === "square-icon" ||
        props.type === "trailing-icon") && (
        <img src={props.icon} alt="icon" width={iconsize} />
      )}
    </div>
  );
};

export default CustomButton;
