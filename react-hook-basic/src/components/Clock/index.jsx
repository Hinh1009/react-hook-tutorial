import React from "react";
import useClock from "../../hooks/useClock";
// import "./main.scss";

function Clock() {
  const { timeString } = useClock();
  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default Clock;
