import React from "react";

const Item = ({ num, title, children, curOpen, onOpen }) => {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div className={isOpen ? "open item" : "item"} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen ? <p className="content-box">{children}</p> : ""}
    </div>
  );
};

export default Item;
