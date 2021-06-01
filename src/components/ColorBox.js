import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <div
      style={{
        width: "64px",
        height: "64px",
        background: state.color,
      }}
    />
  );
};

export default ColorBox;
