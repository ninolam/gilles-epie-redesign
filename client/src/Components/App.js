import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Header from './organisms/Header/Header';
import Footer from './organisms/Footer';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';

import "./../styles/master.scss"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Home exact path="/" />
          <Recipes path="/recipes" />
          <Recipe path="/recipe/:id" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
