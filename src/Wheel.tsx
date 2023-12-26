import { useState } from "react";
import WheelComponent from "./WheelComponent";
import { Surprise } from "./Surprise";

export const Wheel: React.FC = () => {
  const [isDone, setIsDone] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const segments = ["$5", "Hug", "No Prize", "$5", "Surprise", "No Prize"];
  const surpriseSegments = ["Never", "Gonna", "Give", "You", "Up", "!"];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
  ];
  const onFinished = () => {
    setIsDone(true);
    setTimeout(() => {
      setShowSurprise(true);
    }, 3000);
  };

  const size = window.innerWidth > 500 ? 230 : window.innerWidth / 2 - 20;

  if (showSurprise) {
    return <Surprise />;
  }

  return (
    <WheelComponent
      key={isDone ? "surprise" : "wheel"}
      segments={isDone ? surpriseSegments : segments}
      segColors={segColors}
      onFinished={onFinished}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      isOnlyOnce={false}
      upDuration={100}
      downDuration={1000}
      fontFamily="Arial"
      size={size}
    />
  );
};
