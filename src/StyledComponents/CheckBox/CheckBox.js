import React, { useState, useEffect } from "react";
import checkIcon from "../../assets/icons/check-white.svg";
import "./CheckBox.css";
//props: datalist : array of data , setDataList: function to add elements to datalist , value :element, onCheckOn:function to trigger on the checkon event, onCheckOff: function to trigger oncheckoff,disabled: toggle to disable the checkbox,checked: true or false to check the checkbox
const CheckBox = ({
  dataList,
  setDataList,
  value,
  onCheckOn,
  onCheckOff,
  disabled,
  ...props
}) => {
  //state to handle checking the checkbox
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
          console.log("delete");
          var array = [...dataList];
          var index = array.indexOf(value);
          if (index > -1) {
            console.log("delete");
            array.splice(index, 1);
            setDataList(array);
          }
        }
      } else {
        //perfom another work than adding or removing element on check
        if (onCheckOn && onCheckOff) {
          if (!checked) {
            onCheckOn();
          } else {
            onCheckOff();
            console.log("on");
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
    <div className={`checkbox ${checked && "checked"}`} onClick={handleCheck}>
      <img src={checkIcon} alt="check-icon" />
    </div>
  );
};

export default CheckBox;
