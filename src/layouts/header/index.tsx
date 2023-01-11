import { Component } from "./component";
import type { Props } from "./types";

export const Header: React.FC<Props> = (props) => {
  const score = `${props.score.state}`.padStart(3, "0");

  const resetScore = () => {
    props.score.reset();
  };

  return <Component {...props} score={score} resetScore={resetScore} />;
};
