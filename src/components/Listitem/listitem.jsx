import React from "react";
import styles from "./listitem.module.css";

function Listitem(props) {
  const {index, name, nation, level, onItemClick, isSelected} = props;

  const handleClick = () => {
    onItemClick(index);
    console.log("index listItem:", index);
    // console.log("key listItem:", key);
  };

  return (
    <div
      className={`${styles.listitem} ${isSelected ? styles.selected : ""}`}
      onClick={handleClick}
      key={index}
    >
      {name},{nation}, Level {level}
    </div>
  );
}

export default Listitem;
