import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const Press = () => {
  return (
    <section className="Press">
      <div className="Press__wrapper content-wrapper">
        <h3 className="Press__title title-h3"><span>Presse</span> : les articles écris par des médias</h3>
        <p className="Press__text text-large">Explorer des article relatant d’experience, de gastronomie et bien plus…</p>
        <Link className="Press__link button-link button-link--with-icon">
          <span>Explorer</span>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
            <path d="M31.3,97.5c-2.6,0-5.1-1-7.1-2.9c-3.9-3.9-3.9-10.3,0-14.2L54.5,50L24.2,19.6c-3.9-3.9-3.9-10.3,0-14.2    c3.9-3.9,10.3-3.9,14.2,0l37.5,37.5c1.9,1.9,2.9,4.4,2.9,7.1s-1.1,5.2-2.9,7.1L38.4,94.6C36.4,96.5,33.8,97.5,31.3,97.5z" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Press;
