import React from "react";

function FilterCar(props) {
  return (
    <button
      type="button"
      className=""
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> cars</span>
    </button>
  );
}

export default FilterCar;
