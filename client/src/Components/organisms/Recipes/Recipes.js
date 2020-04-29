import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Recipes = () => {

  const [recipes, setRecipes] = useState([])
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:27017/api/recipes")
      .then(res => {
        setRecipes(res.data)
      })
  }, []);

  const handleNext = (recipes) => {
    if (counter < (recipes.length - 1)) {
      setCounter(counter + 1)
    } else {
      setCounter(0)
    }
  }

  const handlePrev = (recipes) => {
    if (counter === 0) {
      setCounter(recipes.length - 1)
    } else {
      setCounter(counter - 1)
    }
  }


  return (
    <section className="Recipes">
      <div className="Recipes__wrapper content-wrapper">
        <div className="Recipes__container">
          <span className="Recipes__counter">0{counter + 1} / 0{recipes.length}</span>
          <h2 className="Recipes__title title-h2">Quelques Recettes du <span>Chef</span></h2>
          <div className="Recipes__texts">
            <p className="Recipes__text text-medium">{recipes[counter] ? recipes[counter].title : null}</p>
            <p className="Recipes__text text-medium">{recipes[counter] ? recipes[counter].ingredients.join(', ') : null}</p>
          </div>
        </div>
      </div>
      <div className="Recipes__view">
        <div className="Recipes__images" style={{ transform: `translateX(-${100 / recipes.length * counter}%)` }}>
          {recipes ? recipes.map((recipe, id) =>
            <div className="Recipes__image" style={{ backgroundImage: `url(${recipe.picture_url})` }} key={id}></div>
          ) : null}
        </div>
        <div className="Recipes__buttons">
          <button className="Recipes__button button-square" onClick={() => handlePrev(recipes)}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
              <path d="M31.3,97.5c-2.6,0-5.1-1-7.1-2.9c-3.9-3.9-3.9-10.3,0-14.2L54.5,50L24.2,19.6c-3.9-3.9-3.9-10.3,0-14.2    c3.9-3.9,10.3-3.9,14.2,0l37.5,37.5c1.9,1.9,2.9,4.4,2.9,7.1s-1.1,5.2-2.9,7.1L38.4,94.6C36.4,96.5,33.8,97.5,31.3,97.5z" />
            </svg>
          </button>
          <button className="Recipes__button button-square" onClick={() => handleNext(recipes)}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
              <path d="M31.3,97.5c-2.6,0-5.1-1-7.1-2.9c-3.9-3.9-3.9-10.3,0-14.2L54.5,50L24.2,19.6c-3.9-3.9-3.9-10.3,0-14.2    c3.9-3.9,10.3-3.9,14.2,0l37.5,37.5c1.9,1.9,2.9,4.4,2.9,7.1s-1.1,5.2-2.9,7.1L38.4,94.6C36.4,96.5,33.8,97.5,31.3,97.5z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
