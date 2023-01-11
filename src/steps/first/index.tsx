import { Component } from "./component";
import type { Props } from "./types";

export const StepFirst: React.FC<Props> = (props) => {
  const toTry = () => {
    props.step.set("try");
    props.pressedCode.reset();
  };

  return <Component {...props} toTry={toTry} />;
};
