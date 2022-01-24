import styles from "./Donate.module.css";

import { useContext } from "react";
import LangContext from "../../store/lang-context";
import BtcPay from "./BtcPay";

const Donate = () => {
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

  return (
    <main className={styles.main}>
      {!langDutch && <h1 className={styles.mainheader}>Tipping page</h1>}
      {langDutch && <h1 className={styles.mainheader}>Ondersteun / Doneer</h1>}

      <div className={styles.recommendationsGrid}>
        {langDutch && (
          <p className={styles.text}>
            Ik biedt mijn schrijfwerk graag voor niets aan, maar als je mijn
            werk waardevol vindt en je wil graag wat terug doen (value4value),
            dan sta ik natuurlijk wel open voor een kleine bijdrage. Bijdragen
            zorgen ervoor dat ik meer tijd kan besteden aan mijn schrijfwerk. Ik
            accepteer bijdragen via BTC-pay-server, dat betekent dat ik
            exclusief bitcoin accepteer. Voor bedragen onder de $6.15 accepteer
            ik alleen betalingen via het lightning network. Betalingen groter
            dan $6.15 kunnen ook on-chain worden gedaan.
            <br />
            <br />
            Al met al ben ik je erg dankbaar als je hebt besloten me te
            ondersteunen. Hopelijk geniet je in de toekomst van meer van mijn
            artikelen en essays.
          </p>
        )}
        {!langDutch && (
          <p className={styles.text}>
            I like to offer my writings for free, but if you found value in my
            writing and you would like to pay me something(value4value), then I
            would gladly accept your support. Being paid for my writing simply
            means I can spend more time doing it. To accept payments I use
            BTC-pay-server, which means I exclusively accept bitcoin. Payments
            below $6.15 can be done over the lightning network, payments over
            $6.15 can be done both on- and off-chain.
            <br />
            <br />
            I'm very happy if you have decided to support my writing, hopefully
            you will enjoy my future writing as well!
          </p>
        )}
        <BtcPay />
      </div>
    </main>
  );
};
export default Donate;
