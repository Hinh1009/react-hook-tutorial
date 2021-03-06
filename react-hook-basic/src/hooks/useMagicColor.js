import { useEffect, useState, useRef } from "react";

function useMagicColor() {
  const [color, setColor] = useState("transparent");

  const colorRef = useRef("transparent");

  const randomColor = (currentColor) => {
    const COLOR_LIST = [
      "red",
      "green",
      "yellow",
      "blue",
      "transparent",
      "black",
      "gray",
    ];
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
      newIndex = Math.trunc(Math.random() * 6);
    }
    // const randomIndex = Math.trunc(Math.random() * 6);
    // console.log(COLOR_LIST[randomIndex]);
    // console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
  };

  useEffect(() => {
    const colorInterval = setInterval(() => {
      //   console.log("Change color", colorRef.current);
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
