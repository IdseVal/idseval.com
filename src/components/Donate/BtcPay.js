import "./BtcPay.css";
import { useState, useEffect, useCallback } from "react";
import { useContext } from "react";
import LangContext from "../../store/lang-context";

const BtcPay = () => {
  const [priceInfo, setPriceInfo] = useState({});
  const [priceInput, setPriceInput] = useState(1);
  const [priceDisplay, setPriceDisplay] = useState(0.0);
  const [currency, setCurrency] = useState("USD");

  const langContext = useContext(LangContext);

  const darkMode = langContext.darkMode;

  let insertDarkMode = "btcpay-custom";

  if (darkMode) {
    insertDarkMode = "btcpay-custom btcpay-customDark";
  }
  if (!darkMode) {
    insertDarkMode = "btcpay-custom";
  }

  const usdPriceBtc = priceInfo.USD;
  const eurPriceBtc = priceInfo.EUR;
  const gbpPriceBtc = priceInfo.GBP;

  const fetchPricesHandler = useCallback(() => {
    fetch("https://blockchain.info/ticker")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPriceInfo(data);
      });
  }, []);

  useEffect(() => {
    if (usdPriceBtc && currency === "USD") {
      setPriceDisplay((priceInput / usdPriceBtc.last).toFixed(8));
    }
    if (eurPriceBtc && currency === "EUR") {
      setPriceDisplay((priceInput / eurPriceBtc.last).toFixed(8));
    }
    if (gbpPriceBtc && currency === "GBP") {
      setPriceDisplay((priceInput / gbpPriceBtc.last).toFixed(8));
    }
    if (currency === "BTC") {
      setPriceDisplay((priceInput * 100000000).toFixed(0));
    }
  }, [priceInfo, priceInput, currency, usdPriceBtc, eurPriceBtc, gbpPriceBtc]);

  useEffect(() => {
    fetchPricesHandler();
  }, [fetchPricesHandler]);

  const inputHandler = (event) => {
    setPriceInput(event.target.value);
  };
  const currencyChangeHandler = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="backdrop">
      <form
        method="POST"
        action="http://btc-pay.idseval.com/api/v1/invoices"
        className="btcpay-form btcpay-form--block"
      >
        <input
          type="hidden"
          name="storeId"
          value="8iQAjXjDtUYa9HyGVNSj4ZjLX6jrM8Y9qvg5QnZNPRDn"
        />
        <input
          type="hidden"
          name="browserRedirect"
          value="https://idseval.com/writings"
        />
        <div className="btcpay-custom-container">
          <div className={insertDarkMode}>
            <div className="inputprice">
              <input
                id="btcpay-input-price"
                name="price"
                type="number"
                min="0.0000001"
                max="100000"
                step="0.0000001"
                defaultValue="1"
                onChange={inputHandler}
              />
              <select
                onChange={currencyChangeHandler}
                name="currency"
                className="minimal"
              >
                <option value="USD" className="option USD" selected>
                  USD
                </option>
                <option className="option EUR" value="EUR">
                  EUR
                </option>
                <option className="option GBP" value="GBP">
                  GBP
                </option>
                <option className="option BTC" value="BTC">
                  BTC
                </option>
              </select>
            </div>
            {currency !== "BTC" && <p> ≈ ₿{priceDisplay}</p>}
            {currency === "BTC" && <p> ≈ {priceDisplay} sats</p>}
          </div>
        </div>
        <input
          type="image"
          className="submit"
          name="submit"
          src="http://btc-pay.idseval.com/img/paybutton/pay.svg"
          alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"
        />
      </form>
    </div>
  );
};
export default BtcPay;
