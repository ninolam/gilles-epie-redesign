import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import '../styles/reset.scss';
import '../styles/global.scss';

import Header from './organisms/Header';
import Footer from './organisms/Footer';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Home exact path="/" />
          <Recipes scrict exact path="/recipes" title="Recettes"/>
          <Recipe path="/recipes/:id" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
