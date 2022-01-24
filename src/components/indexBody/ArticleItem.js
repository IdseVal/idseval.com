import styles from "./ArticleItem.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Tag = (props) => {
  let tagClass;

  if (props.tag === "Bitcoin") {
    tagClass = styles.bitcoin;
  }

  if (props.tag === "Philosophy of Law" || props.tag === "Rechtsfilosofie") {
    tagClass = styles.philolaw;
  }
  if (props.tag === "Money" || props.tag === "Geld") {
    tagClass = styles.money;
  }
  if (props.tag === "Covid-Maatregelen" || props.tag === "Covid-Response") {
    tagClass = styles.covid;
  }
  if (props.tag === "Philosophy" || props.tag === "Filosofie") {
    tagClass = styles.philosophy;
  }
  if (props.tag === "Law" || props.tag === "Recht") {
    tagClass = styles.law;
  }
  if (props.tag === "Truth-pill" || props.tag === "Waarheidspil") {
    tagClass = styles.truthpill;
  }
  if (props.tag === "Fiction" || props.tag === "Fictie") {
    tagClass = styles.fiction;
  }

  return <span className={tagClass}>{props.tag}</span>;
};

const ArticleItem = (props) => {
  const [imageURL, setImgURL] = useState("");

  useEffect(() => {
    const storage = getStorage();
    getDownloadURL(ref(storage, `images/${props.id}`)).then((url) => {
      setImgURL(url);
    });
  }, [props.id]);

  return (
    <li>
      {props.externalLink && (
        <a
          className={styles.wholeLink}
          href={props.externalLink}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.articleimgbox}>
            <img className={styles.articleimg} src={imageURL} alt="" />
          </div>
          <div className={styles.articletextbox}>
            <h3 className={styles.headertertiary}>{props.title}</h3>
            <p className={styles.articledescription}>{props.description}</p>
            <div className={styles.smalprint}>
              {props.language === "ENG" && (
                <p className={styles.publishedin}>
                  {`Published in: ` + `${props.publisher}`}
                </p>
              )}
              {props.language === "NL" && (
                <p className={styles.publishedin}>
                  {`Gepubliceerd op: ` + `${props.publisher}`}
                </p>
              )}
              <div className={styles.tags}>
                <p>Tags:</p>
                {props.tag1 && <Tag tag={props.tag1} />}
                {props.tag2 && <Tag tag={props.tag2} />}
                {props.tag3 && <Tag tag={props.tag3} />}
              </div>
            </div>
          </div>
        </a>
      )}

      {!props.externalLink && (
        <Link className={styles.wholeLink} to={`/article/${props.id}`}>
          <div className={styles.articleimgbox}>
            <img className={styles.articleimg} src={imageURL} alt="" />
          </div>
          <div className={styles.articletextbox}>
            <h3 className={styles.headertertiary}>{props.title}</h3>
            <p className={styles.articledescription}>{props.description}</p>
            <div className={styles.smalprint}>
              {props.language === "ENG" && (
                <p className={styles.publishedin}>
                  {`Published on: ` + `${props.publisher}`}
                </p>
              )}
              {props.language === "NL" && (
                <p className={styles.publishedin}>
                  {`Gepubliceerd op: ` + `${props.publisher}`}
                </p>
              )}
              <div className={styles.tags}>
                <p>Tags:</p>
                {props.tag1 && <Tag tag={props.tag1} />}
                {props.tag2 && <Tag tag={props.tag2} />}
                {props.tag3 && <Tag tag={props.tag3} />}
              </div>
            </div>
          </div>
        </Link>
      )}
    </li>
  );
};

export default ArticleItem;
