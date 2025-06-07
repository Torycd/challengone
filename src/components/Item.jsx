import React from "react";
// import "./components";

const Item = ({ num, title, text }) => {
  return (
    <div className="item">
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">-</p>
      <p className="content-box">{text}</p>
    </div>
  );
};

export default Item;
