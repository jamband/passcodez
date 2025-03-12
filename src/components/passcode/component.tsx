import { PASSCODE_LENGTH } from "@/constants";
import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <div className={styles.passcode}>
    {[...Array(PASSCODE_LENGTH)].map((_, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      <div key={index} className={styles.number}>
        {props.passcode[index]}
      </div>
    ))}
  </div>
);
