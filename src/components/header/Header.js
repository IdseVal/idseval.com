import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, XCircle, List } from "phosphor-react";
import styles from "./Header.module.css";
import mainLogo from "../../images/profile-picture.jpeg";

import Menu from "./Menu";
import Button from "../UI/Button";
import LangContext from "../../store/lang-context";

const Header = () => {
  const ctx = useContext(LangContext);
  const [openMenu, setOpenMenu] = useState(false);

  let headerClasses = styles.header;

  const openMenuHandler = () => {
    setOpenMenu(true);
  };
  const closeMenuHandler = () => {
    setOpenMenu(false);
  };

  const darkModeHandler = () => {
    ctx.onDarkMode();
  };

  const lightModeHandler = () => {
    ctx.onLightMode();
  };

  const darkMode = ctx.darkMode;

  if (darkMode) {
    headerClasses = styles.alldark;
  }

  if (!darkMode) {
    headerClasses = styles.header;
  }

  return (
    <header className={headerClasses}>
      <Link to="/writings">
        <img
          src={mainLogo}
          alt="Idse Val looking away into a red sunset with red laser eyes"
          className={styles.logo}
        />
      </Link>
      <div className={styles.options}>
        {darkMode && (
          <Button themeButton={true} onClick={lightModeHandler}>
            <Sun className={styles.icon} size={64} />
          </Button>
        )}
        {!darkMode && (
          <Button themeButton={true} onClick={darkModeHandler}>
            <Moon className={styles.icon} size={64} />
            {/* <i className={styles.icon} class="ph-moon"></i> */}
          </Button>
        )}
        {!openMenu && (
          <Button themeButton={false} onClick={openMenuHandler}>
            <List className={styles.icon} size={64} />
          </Button>
        )}
        {openMenu && (
          <Button themeButton={false} onClick={closeMenuHandler}>
            <XCircle className={styles.icon} size={64} />
          </Button>
        )}
        <Menu
          openMenu={openMenu}
          closeMenuHandler={closeMenuHandler}
          className={styles.menunav}
        />
      </div>
    </header>
  );
};

export default Header;
