import React, { useState, useEffect } from "react";
import "./Radio.css";
//props: datalist : array of data , setDataList: function to add elements to datalist , value :element, onCheckOn:function to trigger on the checkon event, onCheckOff: function to trigger oncheckoff,disabled: toggle to disable the radio,checked: true or false to check the radio
const Radio = ({
  dataList,
  setDataList,
  value,
  onCheckOn,
  onCheckOff,
  disabled,
  ...props
}) => {
  //state to handle checking the radio
  const [checked, setChecked] = useState(props.checked || false);
  const handleCheck = () => {
    //disabled false
    if (!disabled) {
      if (dataList && setDataList) {
        setChecked(!checked);

        if (checked === false) {
          setDataList([...dataList, value]);
          console.log("add");
        } else {
          var array = [...dataList];
          var index = array.indexOf(value);
          if (index !== -1) {
            array.splice(index, 1);
            setDataList(array);
            console.log("delete");
          }
        }
      } else {
        if (onCheckOn && onCheckOff) {
          if (!checked) {
            onCheckOn();
          } else {
            onCheckOff();
          }
          setChecked(!checked);
        }
      }
    }
  };
  useEffect(() => {
    if (props.checked) setChecked(props.checked);
  }, [props.checked]);
  return (
    <div
      className={`radio-out ${checked && "checked"}`}
      onClick={() => {
        handleCheck();
      }}
    >
      <span className="radio-in"></span>
    </div>
  );
};

export default Radio;
