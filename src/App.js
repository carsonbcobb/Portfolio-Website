import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import GlobalStyle from "./global.styles";
import HomePage from "./pages/Homepage/Homepage.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
