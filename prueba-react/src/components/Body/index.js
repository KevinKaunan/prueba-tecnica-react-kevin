import styles from "./styles.module.css";
import placeHolder from "../../assets/placeholder.png";
export default function Body() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <figure className={styles.image}>
          <img src={placeHolder} alt='Series' />
          <figcaption>Popular series</figcaption>
          <h3>SERIES</h3>
        </figure>

        <figure className={styles.image}>
          <img src={placeHolder} alt='Movies' />
          <figcaption>Popular Movies</figcaption>
          <h3>MOVIES</h3>
        </figure>
      </div>
    </div>
  );
}
