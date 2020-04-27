import React from "react";

const Recipes = () => {
  return (
    <section className="Recipes">
      <div className="Recipes__wrapper content-wrapper">
        <div className="Recipes__container">
          <span className="Recipes__counter">01 / 04</span>
          <h2 className="Recipes__title title-h2">Quelques Recettes du <span>Chef</span></h2>
          <div className="Recipes__texts">
            <p className="Recipes__text text-medium">Ravioli de foie gras de canard au jus de daube</p>
            <p className="Recipes__text text-medium">Recette gastronomique de ravioli de foie gras Ingrédients (pour 6 personnes) Daube de bœuf 300g de joue de bœuf coupée en morceaux 1 litre de vin rouge 500 ml d’eau…</p>
          </div>
        </div>
      </div>
      <div className="Recipes__image">
        <div className="Recipes__buttons">
          <button className="Recipes__button button-square">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
              <path d="M31.3,97.5c-2.6,0-5.1-1-7.1-2.9c-3.9-3.9-3.9-10.3,0-14.2L54.5,50L24.2,19.6c-3.9-3.9-3.9-10.3,0-14.2    c3.9-3.9,10.3-3.9,14.2,0l37.5,37.5c1.9,1.9,2.9,4.4,2.9,7.1s-1.1,5.2-2.9,7.1L38.4,94.6C36.4,96.5,33.8,97.5,31.3,97.5z" />
            </svg>
          </button>
          <button className="Recipes__button button-square">
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
