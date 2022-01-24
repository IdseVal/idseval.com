import styles from "./Button.module.css";
import LangContext from "../../store/lang-context";
import { useContext, Fragment } from "react";

const Button = (props) => {
  const ctx = useContext(LangContext);
  let buttonStyle = styles.button;
  const buttonType = props.themeButton;

  if (ctx.darkMode) {
    buttonStyle = styles.buttondark;
  }
  if (buttonType) {
    buttonStyle = styles.buttonZ;
  }
  if (ctx.darkMode && buttonType) {
    buttonStyle = styles.buttondarkZ;
  }

  return (
    <Fragment>
      {!buttonType && (
        <button onClick={props.onClick} className={buttonStyle}>
          {props.children}
        </button>
      )}
      {buttonType && (
        <button onClick={props.onClick} className={buttonStyle}>
          {props.children}
        </button>
      )}
    </Fragment>
  );
};

export default Button;
