import styles from "./ValueforValue.module.css";
import { useContext, useRef, useState } from "react";
import LangContext from "../../store/lang-context";

const Value4Value = (props) => {
  const langContext = useContext(LangContext);
  const inputRef = useRef("");
  const [btcAmount, setBtcAmount] = useState("0.00001");

  const langDutch = langContext.langDutch;
  const darkMode = langContext.darkMode;

  const toBTCHandler = (event) => {
    const amount = inputRef.current.value / 100000000;
    setBtcAmount(amount);
  };

  let boxStyles = styles.box;

  if (darkMode) {
    boxStyles = styles.boxDark;
  }

  if (!darkMode) {
    boxStyles = styles.box;
  }
  return (
    <div className={boxStyles}>
      {!langDutch && (
        <p className={styles.text1}>Did you get value out of my article?</p>
      )}
      {!langDutch && <p className={styles.text}>Leave some ₿:</p>}
      {langDutch && (
        <p className={styles.text1}>Vond je dit artikel waardevol?</p>
      )}
      {langDutch && <p className={styles.text}>Laat wat ₿ achter:</p>}
      <div className={styles.inputBox}>
        <input
          placeholder="amount"
          className={styles.input}
          onChange={toBTCHandler}
          ref={inputRef}
        />
        <p className={styles.text3}>Sats</p>
      </div>
      <form
        method="POST"
        action="http://btc-pay.idseval.com/api/v1/invoices"
        className="btcpay-form"
      >
        <input name="price" type="hidden" defaultValue={btcAmount} />
        <input
          type="hidden"
          name="browserRedirect"
          value={`https://idseval.com/article/${props.url}`}
        />
        <input
          type="hidden"
          name="storeId"
          value="8iQAjXjDtUYa9HyGVNSj4ZjLX6jrM8Y9qvg5QnZNPRDn"
        />
        <input type="hidden" name="currency" value="BTC" />
        <button
          type="submit"
          className={styles.submit}
          name="submit"
          alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"
        >
          ⚡ Value 4 Value ⚡
        </button>
      </form>
    </div>
  );
};
export default Value4Value;
