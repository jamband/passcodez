import { Component } from "./component";
import type { Props } from "./types";

export const Button: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
