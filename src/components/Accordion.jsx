import React from "react";
import Item from "./Item";

const Accordion = ({ data }) => {
  return (
    <div className="accordiong">
      {data.map((dt) => (
        <Item key={dt.title} />
      ))}
    </div>
  );
};

export default Accordion;
