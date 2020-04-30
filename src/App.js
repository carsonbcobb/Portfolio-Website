import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import PortfolioPage from "./pages/Portfolio/Portfolio.component";
import HomePage from "./pages/Homepage/Homepage.component";
import ContactPage from "./pages/Contact/Contact.component";
import AboutMePage from "./pages/About-Me/About-Me.component";

import Header from "./components/header/header.component";
import GlobalStyle from "./global.styles";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Portfolio" component={PortfolioPage} />
        <Route exact path="/Contact" component={ContactPage} />
        <Route exact path="/AboutMe" component={AboutMePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
