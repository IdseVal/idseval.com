import styles from "./Login.module.css";
import LangContext from "../../store/lang-context";
import AuthContext from "../../store/auth-context";
import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const langContext = useContext(LangContext);
  const authContext = useContext(AuthContext);
  const darkMode = langContext.darkMode;

  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  if (darkMode) {
    const body = document.getElementById("body");
    body.classList.add("alldark");
  }

  if (!darkMode) {
    const body = document.getElementById("body");
    body.classList.remove("alldark");
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAbtPqOIDHGbOIQ2TCgWliMEhaQ9nvgRP8",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authContext.login(data.idToken, expirationTime.toISOString());
        history.replace("/new_article");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.mainheader}>Login</h1>
      <div className={styles.formContainer}>
        <form className={styles.formContainer} onSubmit={submitHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
