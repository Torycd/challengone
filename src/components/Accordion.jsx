import React from "react";
import Item from "./Item";

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((dt, i) => (
        <Item key={dt.title} title={dt.title} text={dt.text} num={i} />
      ))}
    </div>
  );
};

export default Accordion;
