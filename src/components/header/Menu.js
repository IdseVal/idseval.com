import styles from "./Menu.module.css";
import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import LangContext from "../../store/lang-context";

const Menu = (props) => {
  const langContext = useContext(LangContext);
  const langDutch = langContext.langDutch;

  let openStyles = styles.menunav;
  let navLink = styles.menunavlink;

  if (props.openMenu) {
    openStyles = styles.menunavopen;
  }

  if (props.openMenu && langContext.darkMode) {
    openStyles = styles.menunavopendark;
    navLink = styles.menunavlinkdark;
  }

  return (
    <Fragment>
      {!langDutch && (
        <nav className={openStyles}>
          <ul className={styles.menunavlist}>
            <li>
              <Link
                onClick={props.closeMenuHandler}
                to="/writings"
                className={navLink}
              >
                Writings
              </Link>
            </li>
            <li>
              <Link
                onClick={props.closeMenuHandler}
                to="/recommendations"
                className={navLink}
              >
                Recommendations
              </Link>
            </li>
            <li>
              <Link
                onClick={props.closeMenuHandler}
                to="/donate"
                className={navLink}
              >
                Support/Donate
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {langDutch && (
        <nav className={openStyles}>
          <ul className={styles.menunavlist}>
            <li>
              <Link
                onClick={props.closeMenuHandler}
                to="/writings"
                className={navLink}
              >
                Schrijfwerk
              </Link>
            </li>
            <li>
              <Link
                onClick={props.closeMenuHandler}
                to="/recommendations"
                className={navLink}
              >
                Aanbevelingen
              </Link>
            </li>
            <li>
              <Link
                onClick={props.closeMenuHandler}
                to="/donate"
                className={navLink}
              >
                Ondersteun/Doneer
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

export default Menu;
