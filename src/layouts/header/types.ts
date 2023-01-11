import type { useScore } from "~/hooks/score";

export type Props = {
  score: ReturnType<typeof useScore>;
};

export type _Props = {
  score: string;
  resetScore: () => void;
};
