import React, { lazy, Suspense } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import GlobalStyle from "./global.styles";
import Footer from "./components/footer/footer.component";
import Spinner from "./components/spinner/spinner.component";

const PortfolioPage = lazy(() =>
  import("./pages/Portfolio/Portfolio.component")
);
const HomePage = lazy(() => import("./pages/Homepage/Homepage.component"));
const ContactPage = lazy(() => import("./pages/Contact/Contact.component"));
const AboutMePage = lazy(() => import("./pages/About-Me/About-Me.component"));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Portfolio" component={PortfolioPage} />
          <Route exact path="/Contact" component={ContactPage} />
          <Route exact path="/AboutMe" component={AboutMePage} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
