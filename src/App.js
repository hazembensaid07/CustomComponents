import React from "react";

import "./App.css";
import CustomButton from "./StyledComponents/Button/CustomButton";
import Plusiconwhite from "./assets/icons/Plus-icon-white.svg";
import CustomInput from "./StyledComponents/Input/CustomInput";
import Popup from "./StyledComponents/Popup/Popup";
import SearchDropDown from "./StyledComponents/SearchDropDown/SearchDropDown";
import Switch from "./StyledComponents/Switch/Switch";
import CheckBox from "./StyledComponents/CheckBox/CheckBox";
import Radio from "./StyledComponents/Radio/Radio";
import CustomAccordion from "./StyledComponents/Accordion/Accordion";
import Zone from "./Components/Zone/Zone";
function App() {
  return (
    <div className="App">
      {/* <CustomButton
        styled={"dark"}
        title={"submit"}
        type="basic"
        icon={Plusiconwhite}
        size="l"
        onClick={() => {
          console.log("hello");
        }}
      />
      <CustomButton
        styled={"dark"}
        title={"submit"}
        type="trailing-icon"
        icon={Plusiconwhite}
        size="l"
        onClick={() => {
          console.log("hello");
        }}
      />
      <CustomInput
        setValue={() => {
          console.log("hello");
        }}
        type="text"
        placeholder={"tap value here"}
        disabled={false}
        searchicon={false}
      />
       <Popup
        message={"This is the popup"}
        close={() => {
          console.log("hello");
        }}
        onConfirm={() => {
          console.log("hello");
        }}
        Cancel={"cancel"}
        Confirm={"confirm"}
      />
       <SearchDropDown
        dataList={[
          { id: 1, name: "Entreprise01" },
          { id: 2, name: "Entreprise02" },
          { id: 3, name: "Entreprise03" },
          { id: 4, name: "Entreprise04" },
          { id: 5, name: "Entreprise05" },
          { id: 6, name: "Entreprise06" },
          { id: 7, name: "Entreprise07" },
        ]}
        placeholder={"search here"}
        selectedValue={{ id: 7, name: "Entreprise07" }}
        onSelectItem={() => {
          console.log("hello");
        }}
      />
       <Switch
        onToggleState={() => {
          console.log("hello");
        }}
        state={true}
      />
     <CheckBox
        dataList={[
          { id: 1, name: "Entreprise01" },
          { id: 2, name: "Entreprise02" },
          { id: 3, name: "Entreprise03" },
          { id: 4, name: "Entreprise04" },
          { id: 5, name: "Entreprise05" },
          { id: 6, name: "Entreprise06" },
          { id: 7, name: "Entreprise07" },
        ]}
        setDataList={() => {
          console.log("hello");
        }}
        value={{ id: 1, name: "Entreprise01" }}
        onCheckOn={() => {
          console.log("hello");
        }}
        onCheckOff={() => {
          console.log("hello");
        }}
        disabled={false}
        checked={true}
      />  <Radio
        dataList={[
          { id: 1, name: "Entreprise01" },
          { id: 2, name: "Entreprise02" },
          { id: 3, name: "Entreprise03" },
          { id: 4, name: "Entreprise04" },
          { id: 5, name: "Entreprise05" },
          { id: 6, name: "Entreprise06" },
          { id: 7, name: "Entreprise07" },
        ]}
        setDataList={() => {
          console.log("hello");
        }}
        value={{ id: 1, name: "Entreprise01" }}
        onCheckOn={() => {
          console.log("hello");
        }}
        onCheckOff={() => {
          console.log("hello");
        }}
        disabled={false}
        checked={true}
      /><CustomAccordion
        data={[
          {
            heading: "Will my license be automatically renewed?",
            content:
              "Non odit magnam dolorum. Et odio et maxime consequuntur provident. Error eaque est dolor et qui. Ex odit doloremque consequatur quis. Eaque et pariatur dolores. Magni in quasi dolor repudiandae explicabo.",
          },
          {
            heading: "Can I upgrade my license?",
            content:
              "Quos quam ipsam consequatur consequatur et distinctio. Facere vel ut dolorem. Quam quo neque quos voluptates cupiditate sit quae.",
          },
          {
            heading: "Do you provide email support if I need help?",
            content:
              "Vel et quam reprehenderit velit. Possimus accusamus eos esse vero quo modi voluptas hic. Quia illo quisquam vel quis qui. Autem labore aut incidunt. Eius non voluptatem et laboriosam in.",
          },
        ]}
      />*/}
      <Zone />
    </div>
  );
}

export default App;
