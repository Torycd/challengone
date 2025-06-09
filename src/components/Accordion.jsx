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
      <Item
        curOpen={curOpen}
        onOpen={setIsOpen}
        key="Test 1"
        title="Test 1"
        num={22}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </Item>
    </div>
  );
};

export default Accordion;
