import styles from "./Options.module.css";

export default function Options() {
  return (
    <div className={styles.container}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button>
    </div>
  );
}
