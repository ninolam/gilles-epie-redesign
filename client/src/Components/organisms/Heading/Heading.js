
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Heading = ({portraits}) => {

  const [counter, setCounter] = useState(0)

  const handleClick = (portraits) => {
    if (counter < (portraits.length - 1)) {
      setCounter(counter + 1)
    } else {
      setCounter(0)
    }
  }

  return (
    <section className="Heading">
      <div className="Heading__wrapper content-wrapper">
        <div className="Heading__container">
          <p className="Heading__title">Gilles Epie</p>
          <h2 className="Heading__subtitle title-h2">Chef étoile restaurant gastronomique <span>Paris</span></h2>
          <p className="Heading__text text-large">Gilles Epié, Chef de cuisine étoilé d'un restaurant gastronomique français situé à Paris</p>
        </div>
        <Link className="Heading__link button-link" to="/contact">Contact</Link>
        <div className="Heading__steps">
          <div className="Heading__step Heading__step--active"></div>
          <div className="Heading__step"></div>
          <div className="Heading__step"></div>
          <div className="Heading__step"></div>
        </div>
        <span className="Heading__scroll">Scroll</span>
      </div>
      <button className="Heading__button button-circular" onClick={() => handleClick(portraits)}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
          <path d="M31.3,97.5c-2.6,0-5.1-1-7.1-2.9c-3.9-3.9-3.9-10.3,0-14.2L54.5,50L24.2,19.6c-3.9-3.9-3.9-10.3,0-14.2    c3.9-3.9,10.3-3.9,14.2,0l37.5,37.5c1.9,1.9,2.9,4.4,2.9,7.1s-1.1,5.2-2.9,7.1L38.4,94.6C36.4,96.5,33.8,97.5,31.3,97.5z" />
        </svg>
      </button>
      <div className="Heading__portraits">
        <div className="Heading__images" style={{transform: `translateX(-${100 / 3 * counter}%)`}}>
          {portraits ? portraits.map((portrait, id) =>
            <div className="Heading__image" style={{ backgroundImage: `url(${portrait})` }} key={id}></div>
          )
            : null
          }
        </div>
      </div>
    </section>
  );
};

export default Heading;
