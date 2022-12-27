import React, { useState, useEffect } from "react";
import arrowright from "../../assets/icons/arrow-right.svg";
import arrowup from "../../assets/icons/arrow-up.svg";
import "./SearchDropDown.css";
// props: datalist : data to display on the search onSelectItem: function to trigger on selected value , placeholder : text to display in search input selectedValue: value to select
const SearchDropDown = ({
  dataList,
  onSelectItem,
  placeholder,
  selectedValue,
  ...props
}) => {
  //show items toogle
  const [showItems, setShowItems] = useState(false);
  // input search value
  const [search, setSearch] = useState("");
  //selected item state
  const [selectedItem, setSelectedItem] = useState({});
  //filetered data based on search
  const [filteredData, setFilteredData] = useState([
    { id: 1, name: "Entreprise01" },
    { id: 2, name: "Entreprise02" },
    { id: 3, name: "Entreprise03" },
    { id: 4, name: "Entreprise04" },
    { id: 5, name: "Entreprise05" },
    { id: 6, name: "Entreprise06" },
    { id: 7, name: "Entreprise07" },
  ]);
  // trigger this useeffect when datalist change or search state change
  useEffect(() => {
    setFilteredData(
      dataList.filter((el) =>
        el.name
          ? el.name
              .toLocaleLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(search.toLocaleLowerCase())
          : el.title
              .toLocaleLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(search.toLocaleLowerCase())
      )
    );
  }, [dataList, search]);
  // trigger this useeffect when datalist state change
  useEffect(() => {
    if (dataList.length === 1) {
      {
        onSelectItem(dataList[0]);
        setSelectedItem(dataList[0]);
      }
    }
  }, [dataList]);
  useEffect(() => {
    if (selectedValue?.id !== undefined) {
      onSelectItem(selectedValue);
      setSelectedItem(selectedValue);
    }
  }, [selectedValue]);

  return (
    <div className="container">
      <div className="searcharea">
        <input
          type="text"
          placeholder={
            !!selectedItem?.id
              ? selectedItem.name || selectedItem.title
              : placeholder
          }
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          disabled={!showItems}
        ></input>
        {showItems ? (
          <img
            src={arrowup}
            alt="arrowup"
            width="19px"
            height="19px"
            onClick={() => setShowItems(false)}
          />
        ) : (
          <img
            src={arrowright}
            alt="arrowdown"
            onClick={() => setShowItems(true)}
          />
        )}
      </div>
      {showItems && (
        <div className="items">
          {filteredData.map((el) => (
            <span
              key={el.id}
              className="item"
              onClick={() => {
                setSelectedItem(el);
                onSelectItem?.(el);
                setShowItems(false);
                setSearch("");
              }}
            >
              {el.name || el.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDropDown;
