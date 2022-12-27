import React, { useState, useEffect } from "react";
import CustomInput from "../../StyledComponents/Input/CustomInput";
import CustomButton from "../../StyledComponents/Button/CustomButton";
import CheckBox from "../../StyledComponents/CheckBox/CheckBox";
import "./Zone.css";
const Zone = () => {
  const dataList = [
    { id: 1, name: "zone01" },
    { id: 2, name: "zone02" },
    { id: 3, name: "zone03" },
    { id: 4, name: "zone04" },
  ];
  const [search, setSearch] = useState("");
  const [AllZonesSearchResult, setAllZonesSearchResult] = useState(dataList);
  const [selectedZonesToAdd, setSelectedZonesToAdd] = useState([]);

  useEffect(() => {
    setAllZonesSearchResult(
      dataList.filter((el) =>
        el.name
          .toLocaleLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(search.toLocaleLowerCase())
      )
    );
  }, [search]);
  return (
    <div className="layout">
      <span className="text-20-black-campton ">Sélectionner les zones</span>{" "}
      <CustomInput
        setValue={() => {
          console.log("hello");
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space - between",
          alignItems: "center",
        }}
        type="text"
        placeholder={"tap value here"}
        disabled={false}
        searchicon={true}
      />
      <div className="list">
        {AllZonesSearchResult?.map((zone) => (
          <div key={zone.id} className="zone-lot-item">
            <CheckBox
              value={zone.id}
              dataList={selectedZonesToAdd}
              setDataList={setSelectedZonesToAdd}
            />
            <span>{zone.name}</span>
          </div>
        ))}
      </div>
      <div className="zonebtn">
        {" "}
        <CustomButton
          styled={"primary"}
          size={"s"}
          title={"Valider"}
          type={"basic"}
          onClick={() => {
            console.log("hello add");
          }}
        />
      </div>
      <div className="zonebtn">
        <CustomButton
          styled={"secondary"}
          size={"s"}
          title={"Annuler"}
          type={"basic"}
          onClick={() => {
            console.log("hello delete");
          }}
          className="zonebtn"
        />
      </div>
    </div>
  );
};

export default Zone;
