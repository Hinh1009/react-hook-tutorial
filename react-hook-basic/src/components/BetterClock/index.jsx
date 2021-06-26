import React from "react";
import useClock from "../../hooks/useClock";
import "./main.scss";

function BetterClock() {
  const { timeString } = useClock();
  return (
    <div className="better__clock">
      <p className="better__clock__time">{timeString}</p>
    </div>
  );

  // <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default BetterClock;
