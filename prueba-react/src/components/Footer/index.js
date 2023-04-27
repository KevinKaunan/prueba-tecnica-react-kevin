import logoFacebook from "assets/social/facebook-white.svg";
import logoTwitter from "assets/social/twitter-white.svg";
import logoInstagram from "assets/social/instagram-white.svg";
import styles from "./styles.module.css";
export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer>
        <img src={logoFacebook}></img>
        <img src={logoTwitter}></img>
        <img src={logoInstagram}></img>
      </footer>
    </div>
  );
}
