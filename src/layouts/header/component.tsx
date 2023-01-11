import styles from "./styles.module.css";
import type { _Props } from "./types";

export const Component: React.FC<_Props> = (props) => (
  <header className={styles.header}>
    <div>
      Score <span className={styles.score}>{props.score}</span>
    </div>
    <button
      type="button"
      className={styles["reset-score"]}
      onClick={props.resetScore}
    >
      Reset Score
    </button>
  </header>
);
