import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "./Feedback.module.css";

export default function Feedback({
  rating: { good, neutral, bad },
  totalFeedback,
  percentage,
}) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Good", "Neutral", "Bad"],
    datasets: [
      {
        label: "# of feedbacks",
        data: [good, neutral, bad],
        backgroundColor: ["green", "blue", "red"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.container}>
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

      <div className={styles.pieWrapper}>
        <Pie data={data} />
      </div>
    </div>
  );
}
