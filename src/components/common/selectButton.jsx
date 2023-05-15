import React from "react";

const SelectButton = ({ selectedItem, items, onItemSelect }) => {
  return (
    <select
      name="round"
      value={selectedItem}
      onChange={(e) => onItemSelect(e.target.value)}
    >
      {items.map((item, index) => (
        <option key={index} value={index + 1}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectButton;
