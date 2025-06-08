import Item from "./Item";
import { useState } from "react";

const Accordion = ({ data }) => {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((dt, i) => (
        <Item
          curOpen={curOpen}
          onOpen={setIsOpen}
          key={dt.title}
          title={dt.title}
          text={dt.text}
          num={i}
        >
          {dt.text}
        </Item>
      ))}
    </div>
  );
};

export default Accordion;
