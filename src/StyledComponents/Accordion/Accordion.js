import React from "react";
import "./Accordion.css";
import AccordionElement from "./AccordionElement";

const CustomAccordion = ({ data }) => {
  return (
    <ul className="accordion">
      {data.map((el) => (
        <AccordionElement el={el} />
      ))}
    </ul>
  );
};

export default CustomAccordion;
