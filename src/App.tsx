import React from "react";
import { Wheel } from "./Wheel";
import "./styles.css";

export const App: React.FC = () => {
  return (
    <>
      <h1>White Elephant Prize Wheel</h1>
      <p>Spin the wheel for your chance to win!</p>
      <Wheel />
    </>
  );
};
