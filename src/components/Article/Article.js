import "./Article.css";

import Value4Value from "./Value4Value";
import Loadingspinner from "../UI/LoadingSpinner";

import { useContext, useState, useEffect } from "react";
import LangContext from "../../store/lang-context";
import { useParams } from "react-router-dom";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Article = (props) => {
  const ctx = useContext(LangContext);
  const darkMode = ctx.darkMode;

  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState("");
  const [imageURL, setImgURL] = useState("");
  const [list, setList] = useState([
    {
      id: "",
      title: "",
      description: "",
      language: "",
      link: "",
      publisher: "",
      tag1: "",
      tag2: "",
      tag3: "",
      text: "",
      date: "",
    },
  ]);
  const [text, setText] = useState([
    {
      key: "",
      type: "",
      value: "",
    },
  ]);

  const FIREBASE_DOMAIN =
    "https://idsevalblog-default-rtdb.europe-west1.firebasedatabase.app";

  const params = useParams();

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
          publisher: data[key].sideData.publisher,
          tag1: data[key].sideData.tag1,
          tag2: data[key].sideData.tag2,
          tag3: data[key].sideData.tag3,
          text: data[key].text,
          date: data[key].date,
        });
      }
      const loadedArticle = loadedArticles.filter(
        (article) => article.id === `${params.articleId}`
      );

      if (!loadedArticle) {
        return <p>Article not found!?</p>;
      }

      const storage = getStorage();
      getDownloadURL(ref(storage, `images/${loadedArticle[0].id}`)).then(
        (url) => {
          setImgURL(url);
        }
      );

      setList(loadedArticle);
      setIsLoading(false);
    };
    getAllQuotes();
  }, [params.articleId]);

  useEffect(() => {
    if (list[0].date) {
      const dateObject = new Date(`${list[0].date}`);

      const day = dateObject.getDate();
      const year = dateObject.getFullYear();

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const newdate = day + " " + months[dateObject.getMonth()] + " " + year;
      setDate(newdate);
    }

    const loadedText = [];

    const textItems = list[0].text;

    for (const key in textItems) {
      loadedText.push({
        key: textItems[key].id,
        type: textItems[key].type,
        value: textItems[key].value,
      });
    }
    setText(loadedText);
  }, [list]);

  let articleStyle = "container";

  if (darkMode) {
    const body = document.getElementById("body");
    body.classList.add("alldark");
  }

  if (!darkMode) {
    const body = document.getElementById("body");
    body.classList.remove("alldark");
  }

  if (darkMode) {
    articleStyle = "alldark2";
  }

  return (
    <main>
      <div className={articleStyle}>
        <div className="wholearticle">
          <div className="article-container2">
            <h1 id="main-header" className="headerarticle">
              {list[0].title}
            </h1>
            {isLoading && <Loadingspinner />}
            <p className={"date"}>Published: {date}</p>
            <div className="imagebox">
              <img
                src={imageURL}
                alt="physical symbolic bitcoin made of shiny gold metal"
                className="innerarticleimage"
              />
            </div>
            <div className="articlecontent">
              {text.map((item) => (
                <p key={item.key} className={`${item.type}`}>
                  {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Value4Value url={params.articleId} />
    </main>
  );
};

export default Article;
