import { useEffect, useState } from "react";

function useClock() {
  const [timeString, setTimeString] = useState("");

  const formatDate = (date) => {
    if (!date) return "";
    // const date = new Date();
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      console.log("Clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);
  //   return <p style={{ fontSize: "42px" }}>{timeString}</p>;
  return { timeString };
}

export default useClock;
