import type { Step } from "@/types";
import { useState } from "react";

export const useStep = () => {
  const [state, setState] = useState<Step>("first");

  const set = (value: Step) => {
    setState(value);
  };

  return {
    state,
    set,
  } as const;
};
