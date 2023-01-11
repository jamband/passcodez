import { useEffect } from "react";
import { PASSCODE_ALLOW_NUMBERS, PASSCODE_LENGTH } from "~/constants";
import { Component } from "./component";
import type { Props } from "./types";

export const StepTry: React.FC<Props> = (props) => {
  useEffect(() => {
    if (props.pressedCode.state.length === PASSCODE_LENGTH) {
      props.step.set("finish");

      if (props.passcode.state === props.pressedCode.state) {
        props.score.increase();
      }
    }
  }, [props.passcode.state, props.pressedCode.state]); // eslint-disable-line react-hooks/exhaustive-deps

  return <Component {...props} numbers={PASSCODE_ALLOW_NUMBERS} />;
};
