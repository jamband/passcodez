import { Button } from "@/components/button";
import { Passcode } from "@/components/passcode";
import { PasscodeDescription } from "@/components/passcode/description";
import { Spacer } from "@/components/spacer";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <Spacer size={2}>
      <PasscodeDescription>Passcode</PasscodeDescription>
      <Passcode passcode={props.passcode.state} />
    </Spacer>
    <Spacer size={4}>
      <PasscodeDescription>Entered Passcode</PasscodeDescription>
      <Passcode passcode={props.pressedCode.state} />
    </Spacer>
    <div className={styles.buttons}>
      <Button
        onClick={props.toTry}
        disabled={props.passcode.state === props.pressedCode.state}
      >
        Retry
      </Button>
      <Button onClick={props.toFirst}>Next</Button>
    </div>
  </>
);
