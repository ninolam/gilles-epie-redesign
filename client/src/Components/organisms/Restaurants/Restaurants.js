import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Restaurants = () => {
  return (
    <section className="Restaurants">
      <div className="Restaurants__wrapper content-wrapper">
        <div className="Restaurants__restaurant">
          <div className="Restaurants__container">
            <p className="Restaurants__location">Miami</p>
            <div className="Restaurants__image"></div>
          </div>
          <div className="Restaurants__container">
            <h2 className="Restaurants__title title-h2">Juvia</h2>
            <p className="Restaurants__text text-large">Coup de food. – Gilles Épié, chef français de renom, vient de prendre les rênes du Juvia, un restaurant situé sur un rooftop de Miami Beach. Et depuis son arrivée, l’assiette est devenue très prisée.</p>
            <Link className="Restaurants__link button-link--with-icon">
              <span>Détails</span>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
                <path d="M31.3,97.5c-2.6,0-5.1-1-7.1-2.9c-3.9-3.9-3.9-10.3,0-14.2L54.5,50L24.2,19.6c-3.9-3.9-3.9-10.3,0-14.2    c3.9-3.9,10.3-3.9,14.2,0l37.5,37.5c1.9,1.9,2.9,4.4,2.9,7.1s-1.1,5.2-2.9,7.1L38.4,94.6C36.4,96.5,33.8,97.5,31.3,97.5z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="Restaurants__restaurant">
          <div className="Restaurants__container">
            <h2 className="Restaurants__title title-h2">Citrus Etoile</h2>
            <p className="Restaurants__text text-large">Le Citrus Etoile est un restaurant gastronomique français situé à Paris à deux pas des Champs-Elysées. Vous pourrez y déguster une cuisine légère de qualité.</p>
            <Link className="Restaurants__link button-link--with-icon">
              <span>Détails</span>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
                <path d="M31.3,97.5c-2.6,0-5.1-1-7.1-2.9c-3.9-3.9-3.9-10.3,0-14.2L54.5,50L24.2,19.6c-3.9-3.9-3.9-10.3,0-14.2    c3.9-3.9,10.3-3.9,14.2,0l37.5,37.5c1.9,1.9,2.9,4.4,2.9,7.1s-1.1,5.2-2.9,7.1L38.4,94.6C36.4,96.5,33.8,97.5,31.3,97.5z" />
              </svg>
            </Link>
          </div>
          <div className="Restaurants__container">
            <p className="Restaurants__location">Paris</p>
            <div className="Restaurants__image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
