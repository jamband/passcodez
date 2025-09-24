import type { usePasscode } from "../../hooks/passcode";
import type { usePressedCode } from "../../hooks/pressed-code";
import type { useScore } from "../../hooks/score";
import type { useStep } from "../../hooks/step";

export type _Props = {
  step: ReturnType<typeof useStep>;
  score: ReturnType<typeof useScore>;
  passcode: ReturnType<typeof usePasscode>;
  pressedCode: ReturnType<typeof usePressedCode>;
};
