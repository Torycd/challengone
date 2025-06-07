import React, { useState } from "react";

const Item = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={isOpen ? "open item" : "item"} onClick={handleToggle}>
      <p className={isOpen ? "open number" : "number"}>
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className={isOpen ? "open title" : "title"}>{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <p className="content-box">{text}</p> : ""}
    </div>
  );
};

export default Item;
