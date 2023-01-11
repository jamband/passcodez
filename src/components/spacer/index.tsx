import { Component } from "./component";
import type { Props } from "./types";

// this component uses `margin-bottom`. note that the units are `rem`.
export const Spacer: React.FC<Props> = (props) => {
  return <Component {...props} />;
};
