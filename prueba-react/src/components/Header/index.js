import styles from "./styles.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>DEMO Streaming</h3>
        <div className={styles.rigthButtons}>
          <span>
            <p>Log in</p>
          </span>
          <span>
            <p>Start your free trial</p>
          </span>
        </div>
      </div>
      <h3 className={styles.popularTitles}>Popular Titles</h3>
    </>
  );
}
