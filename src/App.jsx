import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [rating, setRating] = useState(() => {
    if (window.localStorage.getItem("feedback")) {
      return JSON.parse(window.localStorage.getItem("feedback"));
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const { good, neutral, bad } = rating;
  const totalFeedback = good + neutral + bad;

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(rating));
  }, [rating]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setRating({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else
      setRating({
        ...rating,
        [feedbackType]: rating[feedbackType] + 1,
      });
  };

  return (
    <div className={styles.appContainer}>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback rating={rating} /> : <Notification />}
    </div>
  );
}

export default App;
