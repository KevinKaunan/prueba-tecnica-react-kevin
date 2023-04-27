import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>DEMO Streaming</h3>
      <div className={styles.article}>
        <span>
          <p>Log in</p>
        </span>
        <span>
          <p>Start your free trial</p>
        </span>
      </div>
    </div>
  );
}
