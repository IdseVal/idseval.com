import styles from "./ArticleListENG.module.css";
import ArticleItem from "./ArticleItem";
import LoadingSpinner from "../UI/LoadingSpinner";
import { useContext, useState, useEffect } from "react";
import LangContext from "../../store/lang-context";

const ArticleListNL = (props) => {
  const ctx = useContext(LangContext);

  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  let ulStyles = styles.writingslist;

  if (ctx.darkMode) {
    ulStyles = styles.writingslistdark;
  }

  const FIREBASE_DOMAIN =
    "https://idsevalblog-default-rtdb.europe-west1.firebasedatabase.app";

  useEffect(() => {
    const getAllQuotes = async () => {
      setIsLoading(true);
      const response = await fetch(`${FIREBASE_DOMAIN}/articles.json`);
      const data = await response.json();

      const loadedArticles = [];

      for (const key in data) {
        loadedArticles.push({
          id: data[key].id,
          title: data[key].title,
          description: data[key].sideData.description,
          language: data[key].sideData.language,
          link: data[key].sideData.link,
          publisher: data[key].sideData.publisher,
          tag1: data[key].sideData.tag1,
          tag2: data[key].sideData.tag2,
          tag3: data[key].sideData.tag3,
          text: data[key].text,
        });
      }
      const loadedArticlesNL = loadedArticles.filter(
        (article) => article.language === "NL"
      );

      setList(loadedArticlesNL);
      setIsLoading(false);
    };
    getAllQuotes();
  }, []);
  return (
    <div className={styles.writingsbackground}>
      {isLoading && (
        <div className={styles.spinner}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <ul className={ulStyles}>
          {list.map((item) => (
            <ArticleItem
              className={styles.listItem}
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              publisher={item.publisher}
              tag1={item.tag1}
              tag2={item.tag2}
              tag3={item.tag3}
              externalLink={item.link}
              language={item.language}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticleListNL;
