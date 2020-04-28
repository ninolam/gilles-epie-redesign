import React from 'react';

const Biography = () => {

  return (
    <section className="Biography">
      <div className="Biography__wrapper content-wrapper">
        <div className="Biography__container">
          <div className="Biography__infos">
            <div className="Biography__info">
              <p>Ces mentors</p>
              <p>Roger Jaloux, Jean-Pierre Coffe, François Clerc</p>
            </div>
            <div className="Biography__info">
              <p>Fun facts</p>
              <p>Il quitte Paris en 1995 pour explorer l’Amérique – sans maîtriser la langue-, et sa gastronomie. Un an plus tard, il est élu « Le Meilleur Chef Cuisinier » aux Etats – Unis.</p>
            </div>
          </div>
          <p className="Biography__label">Biographie</p>
        </div>
        <div className="Biography__container">
          <div className="Biography__texts">
            <h4 className="Biography__title title-h4">Gilles Epié, Chef de cuisine étoilé d’un restaurant gastronomique français situé à Paris dévoile sa carrière de top chef à travers cet article.</h4>
            <p className="Biography__text text-large">Gilles Epie commence à travailler à l’âge de 14 ans avec Roger Jaloux, le chef emblématique du restaurant Paul Bocuse puis Alain Senderens. Il a ensuite continué sa carrière aux côtés de Jean-Pierre Coffe au restaurant La Ciboulette.</p>
            <p className="Biography__text text-large">Ce n’est qu’après avoir voyagé dans le monde entier qu’il retourne à Paris et reçoit une étoile Michelin en 1989 détenant à 22 ans seulement, le record du plus jeune chef étoilé de France. Avant de rejoindre François Clerc à la Vieille Fontaine à Maison Laffite en qualité de chef, ils obtiennent une 2ème étoile Michelin.</p>
          </div>
          <div className="Biography__image"></div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
