import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "./organisms/Footer";
import Header from "./organisms/Header/Header";
import Menu from "./organisms/Menu/Menu";
import Konami from "./organisms/Konami/Konami";

import Home from "./pages/Home";
import PageList from "./pages/PageList/PageList";
import PageDetails from "./pages/PageDetails/PageDetails";
import Restaurant from "./pages/Restaurant/Restaurant";

import konami from "../utils/konami.util";

const App = () => {
  const [isKonamiCodeFounded, setIsKonamiCodeFounded] = useState(false);
  useEffect(() => {
    konami(() => setIsKonamiCodeFounded(true));
  });
  return (
    <div className="App">
      {isKonamiCodeFounded ? (
        <Konami setIsKonamiCodeFounded={setIsKonamiCodeFounded} />
      ) : null}
      <Router>
        <Header />
        <Switch>
          <Home exact path="/" />
          <Restaurant path="/restaurants/:id" title="Restaurant" />
          <PageList exact path="/recipes" title="Recettes" />
          <PageList exact path="/articles" title="Press" />
          <PageDetails path="/:path/:id" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
