import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "./organisms/Footer/Footer";
import Header from "./organisms/Header/Header";

import Home from "./pages/Home";
import PageList from "./pages/PageList/PageList";
import PageDetails from "./pages/PageDetails/PageDetails";
import Restaurant from "./pages/Restaurant/Restaurant"

import konami from "../utils/konami.util";

const App = () => {
  useEffect(() => {
    konami(() => alert("KONAMICODE"));
  });
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Home exact path="/" />
          <Restaurant exact path="/restaurant/:id" title="Restaurant" />
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
