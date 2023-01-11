import type { usePasscode } from "~/hooks/passcode";
import type { usePressedCode } from "~/hooks/pressed-code";
import type { useStep } from "~/hooks/step";

export type Props = {
  step: ReturnType<typeof useStep>;
  passcode: ReturnType<typeof usePasscode>;
  pressedCode: ReturnType<typeof usePressedCode>;
};

export type _Props = Props & {
  toFirst: () => void;
  toTry: () => void;
};
