import styles from "./Body.module.css";
import ArticleListENG from "./ArticleListENG";
import ArticleListNL from "./ArticleListNL";
import { useContext } from "react";
import LangContext from "../../store/lang-context";

const Body = () => {
  const langContext = useContext(LangContext);

  const langDutch = langContext.langDutch;
  const darkMode = langContext.darkMode;

  if (darkMode) {
    const body = document.getElementById("body");
    body.classList.add("alldark");
  }

  if (!darkMode) {
    const body = document.getElementById("body");
    body.classList.remove("alldark");
  }

  const langDutchHandler = () => {
    langContext.onDutch();
  };
  const langEngHandler = () => {
    langContext.onEnglish();
  };

  let langBoxStyles = styles.languages;

  if (langDutch) {
    langBoxStyles = `${styles.languages} ${styles.swaplanguages}`;
  }

  return (
    <main className={`${styles.container} ${styles.main}`}>
      {!langDutch && <h1 className={styles.mainheader}>Writings</h1>}
      {langDutch && <h1 className={styles.mainheader}>Schrijfwerk</h1>}
      <div className={langBoxStyles}>
        <button
          onClick={langEngHandler}
          className={`${styles.emojiflag} ${styles.englishwritings}`}
        >
          🇬🇧
        </button>
        <button
          onClick={langDutchHandler}
          className={`${styles.emojiflag} ${styles.dutchwritings}`}
        >
          🇳🇱
        </button>
      </div>
      {langDutch && <ArticleListNL langDutch={langDutch} />}
      {!langDutch && <ArticleListENG langDutch={langDutch} />}
    </main>
  );
};

export default Body;
