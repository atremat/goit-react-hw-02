import styles from "./Feedback.module.css";

export default function Feedback() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p>Good: {}</p>
      </li>
      <li className={styles.item}>
        <p>Neutral: {}</p>
      </li>
      <li className={styles.item}>
        <p>Bad: {}</p>
      </li>
      <li className={styles.item}>
        <p>Total: {}</p>
      </li>
      <li className={styles.item}>
        <p>Positive: {}</p>
      </li>
    </ul>
  );
}
