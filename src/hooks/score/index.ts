import { useState } from "react";

export const useScore = () => {
  const initialState = 0;
  const [state, setState] = useState(initialState);

  const increase = () => {
    setState((previous) => previous + 1);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increase,
    reset,
  } as const;
};
