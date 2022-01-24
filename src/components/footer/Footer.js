import styles from "./Footer.module.css";
import mainLogo from "../../images/profile-picture.jpeg";
import { useContext } from "react";
import LangContext from "../../store/lang-context";
import { Link } from "react-router-dom";

const Footer = () => {
  const langContext = useContext(LangContext);
  const langDutch = langContext.langDutch;
  const darkMode = langContext.darkMode;

  let footerStyles = styles.footer;

  if (darkMode) {
    footerStyles = styles.footerdark;
  }

  return (
    <footer className={footerStyles}>
      <div className={styles.footergrid}>
        <div className={styles.imgandsocials}>
          <a href="#">
            <img
              className={styles.profilepicturefooter}
              src={mainLogo}
              alt="Idse Val looking into the red sunset with laser focused eyes"
            />
          </a>
          <p className={styles.nameidse}>Idse Val</p>
          <div className={styles.socialsbox}>
            <a
              className={`${styles.twitter} ${styles.socialslogo}`}
              href="https://twitter.com/idseval"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ph-twitter-logo"></i>
            </a>
            <a
              className={`${styles.linkedin} ${styles.socialslogo}`}
              href="https://www.linkedin.com/in/idseval/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ph-linkedin-logo"></i>
            </a>
            <a
              className={`${styles.github} ${styles.socialslogo}`}
              href="https://github.com/IdseVal"
              target="_blank"
              rel="noreferrer"
            >
              <i class="ph-github-logo"></i>
            </a>
          </div>
        </div>
        {!langDutch && (
          <div className={styles.footernav}>
            <ul className={styles.footerlist}>
              <li>
                <Link to="/about">About Idse Val</Link>
              </li>
              <li>
                <Link to="/donate">Tip me some sats⚡</Link>
              </li>
            </ul>
          </div>
        )}
        {langDutch && (
          <div className={styles.footernav}>
            <ul className={styles.footerlist}>
              <li>
                <Link to="/about">Over Idse Val</Link>
              </li>
              <li>
                <Link to="/donate">Doneer wat sats⚡</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
