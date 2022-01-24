import React from "react";
import useLocalStorage from "use-local-storage";

const LangContext = React.createContext({
  langDutch: false,
  onDutch: () => {},
  onEnglish: () => {},
  darkMode: false,
  onDarkMode: () => {},
  onLightMode: () => {},
});

export const LangContextProvider = (props) => {
  const [langDutch, setLangDutch] = useLocalStorage(
    "langDutch/idseval.com",
    false
  );
  const [darkMode, setDarkMode] = useLocalStorage(
    "darkMode/idseval.com",
    false
  );

  // LANGHANDLERS

  const langEnglishHandler = () => {
    setLangDutch(false);
  };

  const langDutchHandler = () => {
    setLangDutch(true);
  };

  //DARKMODE & LIGHTMODE

  const lightModeHandler = () => {
    setDarkMode(false);
    const body = document.getElementById("body");
    body.classList.remove("alldark");
  };

  const darkModeHandler = () => {
    setDarkMode(true);
    const body = document.getElementById("body");
    body.classList.add("alldark");
  };

  return (
    <LangContext.Provider
      value={{
        langDutch: langDutch,
        onDutch: langDutchHandler,
        onEnglish: langEnglishHandler,
        darkMode: darkMode,
        onDarkMode: darkModeHandler,
        onLightMode: lightModeHandler,
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContext;
