import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div style={{ marginBottom: `${props.size}rem` }}>{props.children}</div>
);
