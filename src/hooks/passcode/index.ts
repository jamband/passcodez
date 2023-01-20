import { PASSCODE_LENGTH } from "@/constants";
import { generatePasscode } from "@/utils";
import { useState } from "react";

export const usePasscode = () => {
  const initialState = generatePasscode(PASSCODE_LENGTH);
  const [state, setState] = useState(initialState);

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    reset,
  } as const;
};
