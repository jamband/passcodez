import { Button } from "../../components/button";
import { Passcode } from "../../components/passcode";
import { PasscodeDescription } from "../../components/passcode/description";
import { Spacer } from "../../components/spacer";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <>
    <PasscodeDescription>Remember passcode</PasscodeDescription>
    <Spacer size={4}>
      <Passcode passcode={props.passcode.state} />
    </Spacer>
    <Button onClick={props.toTry}>OK</Button>
  </>
);
