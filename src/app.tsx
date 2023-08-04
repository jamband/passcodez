import "@/styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { usePasscode } from "./hooks/passcode";
import { usePressedCode } from "./hooks/pressed-code";
import { useScore } from "./hooks/score";
import { useStep } from "./hooks/step";
import { Header } from "./layouts/header";
import { Main } from "./layouts/main";
import { StepFinish } from "./steps/finish";
import { StepFirst } from "./steps/first";
import { StepTry } from "./steps/try";

const App = () => {
  const step = useStep();
  const score = useScore();
  const passcode = usePasscode();
  const pressedCode = usePressedCode();

  return (
    <>
      <Header score={score} />
      <Main>
        {step.state === "first" ? (
          <StepFirst
            step={step}
            passcode={passcode}
            pressedCode={pressedCode}
          />
        ) : step.state === "try" ? (
          <StepTry
            step={step}
            score={score}
            passcode={passcode}
            pressedCode={pressedCode}
          />
        ) : (
          <StepFinish
            step={step}
            passcode={passcode}
            pressedCode={pressedCode}
          />
        )}
      </Main>
    </>
  );
};

const container = document.getElementById("app");

if (container === null) {
  throw new Error("the element does not exist.");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
