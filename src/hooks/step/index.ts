import { useState } from "react";
import type { Step } from "~/types";

export const useStep = () => {
  const initialState: Step = "first";
  const [state, setState] = useState<Step>(initialState);

  const set = (value: Step) => {
    setState(value);
  };

  return {
    state,
    set,
  } as const;
};
