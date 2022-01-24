import styles from "./Recommendations.module.css";

import { useContext } from "react";
import LangContext from "../../store/lang-context";

const Recommendations = () => {
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

  let linkStyle = styles.listLink;

  if (darkMode) {
    linkStyle = styles.listLinkDark;
  }
  if (!darkMode) {
    linkStyle = styles.listLink;
  }

  return (
    <main className={styles.main}>
      {!langDutch && <h1 className={styles.mainheader}>Recommendations</h1>}
      {langDutch && <h1 className={styles.mainheader}>Aanbevelingen</h1>}
      <div className={styles.recommendationsGrid}>
        <h3 className={styles.subheader}>Free educational (Bitcoin) content</h3>
        <ul className={styles.list}>
          <li>
            <a
              href="https://nakamotoinstitute.org/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Satoshi Nakamoto Institute - Historic Bitcoin content
            </a>
          </li>
          <li>
            <a
              href="https://bitcoinaudible.com/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Bitcoin Audible by Guy Swan - Audio of great Bitcoin content
            </a>
          </li>
          <li>
            <a
              href="https://bitcoinmagazine.com/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Bitcoin Magazine - Bitcoin focussed media outlet
            </a>
          </li>
          <li>
            <a
              href="https://www.btcsessions.ca/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              BTC Sessions - Endless amounts of How-To's
            </a>
          </li>
          <li>
            <a
              href="https://breedlove22.medium.com/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Writings of Robert Breedlove
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@erikcason"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Writings of Erik Cason
            </a>
          </li>
          <li>
            <a
              href="https://niccarter.info/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Writings/Content of Nic Carter
            </a>
          </li>
          <li>
            <a
              href="https://mises.org/books-library"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Mises Institute - Free Libertarian books
            </a>
          </li>
          <li>
            <a
              href="https://www.lynalden.com/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Lyn Alden - Macroeconomist blog
            </a>
          </li>
          <li>
            <a
              href="https://bitcoinmagazine.com/authors/alexgladstein"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Articles by Alex Gladstein
            </a>
          </li>
        </ul>
        <h3 className={styles.subheader}>Recommended podcasts</h3>
        <ul className={styles.list}>
          <li>
            <a
              href="https://anchor.fm/john-vallis"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Bitcoin Rapid Fire by John Vallis
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/RobertBreedlove22/videos"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              The "What is Money?" Show by Robert Breedlove
            </a>
          </li>
          <li>
            <a
              href="https://citadeldispatch.com/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Citadel Dispatch - More technical Bitcoin podcast
            </a>
          </li>
          <li>
            <a
              href="https://tftc.io/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              TFTC - Rabbit Hole Recap
            </a>
          </li>
        </ul>
        <h3 className={styles.subheader}>Must Reads</h3>
        <ul className={styles.list}>
          <li>
            <a
              href="https://www.amazon.com/Sovereign-Individual-Mastering-Transition-Information/dp/0684832720/ref=sr_1_1?crid=2PSWPMVWZK45Y&keywords=the+sovereign+individual&qid=1640260069&sprefix=the+soverein%2Caps%2C1219&sr=8-1"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              The Sovereign Individual - James Dale Davidson
            </a>
          </li>
          <li>
            <a
              href="https://nakamotoinstitute.org/shelling-out/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Shelling Out: The Origins of Money - Nick Szabo (free)
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/Anarchy-State-Utopia-Robert-Nozick/dp/0465051006/ref=sr_1_1?keywords=anarchy+state+and+utopia&qid=1640260215&sprefix=anarchy+sta%2Caps%2C203&sr=8-1"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Anarchy, State and Utopia - Robert Nozick
            </a>
          </li>
          <li>
            <a
              href="https://press.uchicago.edu/ucp/books/book/chicago/R/bo4138549.html"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              The Road to Serfdom - F.A. Hayek
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/Against-Method-Paul-Feyerabend-2008-06-11/dp/B01JQG7CTU"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Against Method - Paul Feyerabend
            </a>
          </li>
          <li>
            <a
              href="https://www.gutenberg.org/files/4363/4363-h/4363-h.htm"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Beyond Good and Evil - Friedrich Nietschze (free)
            </a>
          </li>
          <li>
            <a
              href="http://classics.mit.edu/Antoninus/meditations.html"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Meditations - Marcus Aurelius (free)
            </a>
          </li>
        </ul>
        <h3 className={styles.subheader}>Books on Money</h3>
        <ul className={styles.list}>
          <li>
            <a
              href="https://saifedean.com/thebitcoinstandard/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              The Bitcoin Standard - Saifedean Ammous
            </a>
          </li>
          <li>
            <a
              href="https://saifedean.com/the-fiat-standard/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              The Fiat Standard - Saifedean Ammous
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/When-Money-Dies-Devaluation-Hyperinflation/dp/1586489941/ref=sr_1_1?keywords=when+money+dies&qid=1640260685&s=books&sprefix=when+mone%2Cstripbooks-intl-ship%2C490&sr=1-1"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              When Money Dies - Adam Fergusson
            </a>
          </li>
          <li>
            <a
              href="https://global.oup.com/academic/product/making-money-9780198709572?cc=us&lang=en&"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Making Money - Christine Desan
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/Layered-Money-Dollars-Bitcoin-Currencies/dp/1736110527"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Layered Money - Nik Bhatia
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/Price-Tomorrow-Deflation-Abundant-Future/dp/1999257405/ref=sr_1_1?keywords=price+of+tomorrow&qid=1640261000&s=books&sprefix=price+of+%2Cstripbooks-intl-ship%2C147&sr=1-1"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              The Price of Tommorow - Jeff Booth
            </a>
          </li>
        </ul>
        <h3 className={styles.subheader}>General Bitcoin Info</h3>
        <ul className={styles.list}>
          <li>
            <a
              href="https://bitcoin.org/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Bitcoin.org
            </a>
          </li>
          <li>
            <a
              href="https://bitcoin-only.com/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Bitcoin-only.com - Everything specialised in Bitcoin
            </a>
          </li>
        </ul>
        <h3 className={styles.subheader}>Places to buy Bitcoin(EU)</h3>
        <ul className={styles.list}>
          <li>
            <a
              href="https://bitonic.nl/?refcode=qRoUmi2548147"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Bitonic
            </a>
          </li>
          <li>
            <a
              href="https://relai.app/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Relai
            </a>
          </li>
          <li>
            <a
              href="https://bisq.network/"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              Bisq-network (Bitcoin-dex)
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Recommendations;
