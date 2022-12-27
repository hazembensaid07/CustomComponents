import React from "react";
import CustomButton from "../Button/CustomButton";
import "./Popup.css";
//props: close :  function to trigger onclose ,  message : message to display on the popup , onConfirm : function to trigger onconfirm , Cnacel : cancel button title , Confirm: confirm button title
const Popup = ({ close, message, onConfirm, Cancel, Confirm, ...props }) => {
  return (
    <div className="Modal-overlay">
      <div className="Contact-modal-container Association-flex-column3">
        <div className="Contact-Modal-header">
          <div>{message}</div>
        </div>
        <div className="Association-flex-row">
          <CustomButton
            styled={"primary"}
            title={Confirm}
            type="basic"
            icon={""}
            size="m"
            onClick={onConfirm}
          />
          <CustomButton
            styled={"secondary"}
            title={Cancel}
            type="basic"
            icon={""}
            size="m"
            onClick={close}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Popup;
