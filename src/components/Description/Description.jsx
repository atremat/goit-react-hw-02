import styles from "./Description.module.css";

export default function Description() {
  return (
    <div>
      <h2 className={styles.header}>Sip Happens Café</h2>
      <p className={styles.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
