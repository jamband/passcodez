import { usePasscode } from "../../hooks/passcode";
import { usePressedCode } from "../../hooks/pressed-code";
import { useScore } from "../../hooks/score";
import { useStep } from "../../hooks/step";
import { Component } from "./component";

export const App: React.FC = () => {
  const step = useStep();
  const score = useScore();
  const passcode = usePasscode();
  const pressedCode = usePressedCode();

  return (
    <Component
      step={step}
      score={score}
      passcode={passcode}
      pressedCode={pressedCode}
    />
  );
};
