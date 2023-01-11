import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <button
    type="button"
    className={styles.button}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
