import type { PASSCODE_ALLOW_NUMBERS } from "~/constants";
import type { usePasscode } from "~/hooks/passcode";
import type { usePressedCode } from "~/hooks/pressed-code";
import type { useScore } from "~/hooks/score";
import type { useStep } from "~/hooks/step";

export type Props = {
  step: ReturnType<typeof useStep>;
  score: ReturnType<typeof useScore>;
  passcode: ReturnType<typeof usePasscode>;
  pressedCode: ReturnType<typeof usePressedCode>;
};

export type _Props = Props & {
  numbers: typeof PASSCODE_ALLOW_NUMBERS;
};
