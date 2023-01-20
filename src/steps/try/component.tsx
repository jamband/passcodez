import { PasscodeButton } from "@/components/passcode/button";
import { PasscodeDescription } from "@/components/passcode/description";
import { PressedCode } from "@/components/pressed-code";
import { Spacer } from "@/components/spacer";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Spacer size={2}>
      <PasscodeDescription>Enter passcode</PasscodeDescription>
    </Spacer>
    <Spacer size={2}>
      <PressedCode pressedCode={props.pressedCode.state} />
    </Spacer>
    <div className={styles.buttons}>
      {props.numbers.map((number) => (
        <PasscodeButton
          key={number}
          number={number}
          onClick={() => props.pressedCode.set(number)}
        />
      ))}
    </div>
  </>
);
