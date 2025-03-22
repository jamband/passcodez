import { PASSCODE_LENGTH } from "../../constants";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles["pressed-code"]}>
    {[...Array(PASSCODE_LENGTH)].map((_, index) => (
      <span
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
        className={`${styles.number} ${
          index >= props.pressedCode.length
            ? styles["not-pressed"]
            : styles.pressed
        }`}
      />
    ))}
  </div>
);
