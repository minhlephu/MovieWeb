import React from "react";
import "./nameOfTheater.scss";
import { colorTheater } from "../../constrants/theaterData";

const NameOfTheater = ({ nameOfTheater }) => {
  return (
    <p className="text__first">
      <span>{nameOfTheater?.split("-")[0]}</span>
      <span className="text__second">-{nameOfTheater?.split("-")[1]}</span>
    </p>
  );
};

export default NameOfTheater;
