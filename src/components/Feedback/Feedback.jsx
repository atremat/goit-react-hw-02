import styles from "./Feedback.module.css";

export default function Feedback({ rating: { good, neutral, bad } }) {
  const totalFeedback = good + neutral + bad;
  const percentage =
    totalFeedback && Math.round((100 * (good + neutral)) / totalFeedback);
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p>Good: {good}</p>
      </li>
      <li className={styles.item}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={styles.item}>
        <p>Bad: {bad}</p>
      </li>
      <li className={styles.item}>
        <p>Total: {totalFeedback}</p>
      </li>
      <li className={styles.item}>
        <p>Positive: {percentage}%</p>
      </li>
    </ul>
  );
}
