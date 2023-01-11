import { Component } from "./component";
import type { Props } from "./types";

export const StepFinish: React.FC<Props> = (props) => {
  const toFirst = () => {
    props.step.set("first");
    props.passcode.reset();
    props.pressedCode.reset();
  };

  const toTry = () => {
    props.step.set("try");
    props.pressedCode.reset();
  };

  return <Component {...props} toFirst={toFirst} toTry={toTry} />;
};
