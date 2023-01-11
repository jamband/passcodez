import { useState } from "react";

export const usePressedCode = () => {
  const initialState = "";
  const [state, setState] = useState(initialState);

  const set = (number: string) => {
    setState((previous) => previous + number);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    set,
    reset,
  } as const;
};
