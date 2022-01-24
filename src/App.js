import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/header/Header";
import Body from "./components/indexBody/Body";
import Article from "./components/Article/Article";
import Footer from "./components/footer/Footer";
import Recommendations from "./components/Recommendations/Recommendations";
import About from "./components/About/About";
import Donate from "./components/Donate/Donate";
import Login from "./components/Login/Login";
import NewArticle from "./components/NewArticle/NewArticle";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/writings" />
        </Route>
        <Route path="/writings" exact>
          <Body />
        </Route>
        <Route path="/article/:articleId" exact>
          <Article />
        </Route>
        <Route path="/recommendations" exact>
          <Recommendations />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/donate" exact>
          <Donate />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/new_article" exact>
          <NewArticle />
        </Route>
        <Route path="*">
          <Redirect to="/writings" />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
