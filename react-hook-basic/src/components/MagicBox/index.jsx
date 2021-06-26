import React from "react";
import useMagicColor from "../../hooks/useMagicColor";
import "./main.scss";

function MagicBox() {
  const color = useMagicColor();
  return <div className="magic__box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
