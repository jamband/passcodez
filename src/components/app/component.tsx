import { Header } from "../../layouts/header";
import { Main } from "../../layouts/main";
import { StepFinish } from "../../steps/finish";
import { StepFirst } from "../../steps/first";
import { StepTry } from "../../steps/try";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Header score={props.score} />
    <Main>
      {props.step.state === "first" && (
        <StepFirst
          step={props.step}
          passcode={props.passcode}
          pressedCode={props.pressedCode}
        />
      )}
      {props.step.state === "try" && (
        <StepTry
          step={props.step}
          score={props.score}
          passcode={props.passcode}
          pressedCode={props.pressedCode}
        />
      )}
      {props.step.state === "finish" && (
        <StepFinish
          step={props.step}
          passcode={props.passcode}
          pressedCode={props.pressedCode}
        />
      )}
    </Main>
  </>
);
