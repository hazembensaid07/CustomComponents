import React from "react";
import "./CustomInput.css";
import searchiconn from "../../assets/icons/search-icon.svg";
//props : placeholder : text to put in the input value: input dynamic value setvalue: function the handle dynamic change of value disableInput: boolean value
//width: input width type: input type (can be text email password ....)
//searchicon : if the input is a search input
const CustomInput = ({
  placeholder,
  value,
  setValue,
  disableInput,
  width,
  searchicon,
  style,
  ...props
}) => {
  let stylee = "nosearch";
  searchicon && (stylee = "search");
  return (
    <div className={stylee} style={style}>
      {searchicon && <img src={searchiconn} alt="icon" />}
      <input
        type={props.type ? props.type : "text"}
        placeholder={placeholder}
        disabled={disableInput && disableInput}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default CustomInput;
