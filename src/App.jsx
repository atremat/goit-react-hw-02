import styles from "./App.module.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  return (
    <div className={styles.appContainer}>
      <Description />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
