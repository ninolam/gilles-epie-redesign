import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

const Menu = () => {

  const [restaurantsInfos, setRestaurantsInfos] = useState([])

  useEffect(() => {
    axios.get("http://localhost:27017/api/restaurants")
      .then(res => {
        setRestaurantsInfos(res.data)
      })
  }, []);

  const handleClick = () => {
    document.querySelector('.Menu').classList.remove('Menu--active')
  }

  return (
    <section className="Menu">
      <div className="Menu__wrapper content-wrapper">
        <Link to="/">
          <h1 className="Menu__brand">Gilles Epie</h1>
        </Link>
        <button className="Menu__close" onClick={() => { handleClick() }}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 1024 1000">
            <path d="M808.1,265.9c-0.1,12.8-5.7,26.3-14.7,35.4l-0.8,0.8c-6.4,6.5-12.8,12.8-19.2,19.2L582.7,512l210.7,210.7  c9.5,9.5,14.1,22.1,14.7,35.4c0.5,13.4-6,25.8-14.7,35.4c-8.4,9.3-23.1,14.7-35.4,14.7c-12.8-0.1-26.3-5.7-35.4-14.7l-0.8-0.8  c-6.5-6.4-12.8-12.8-19.2-19.2L512,582.7L301.3,793.4c-9.6,9.6-22.1,14.1-35.4,14.7c-13.4,0.5-25.8-6-35.4-14.7  c-9.3-8.4-14.7-23.1-14.7-35.4c0.1-12.8,5.7-26.3,14.7-35.4l0.8-0.8c6.4-6.5,12.8-12.8,19.2-19.2L441.3,512L230.6,301.3  c-9.6-9.6-14.1-22.1-14.7-35.4c-0.5-13.4,6-25.8,14.7-35.4c8.4-9.3,23.1-14.7,35.4-14.7c12.8,0.1,26.3,5.7,35.4,14.7l0.8,0.8  c6.5,6.4,12.8,12.8,19.2,19.2L512,441.3l210.7-210.7c9.5-9.5,22.1-14.1,35.4-14.7c13.4-0.5,25.8,6,35.4,14.7  C802.7,239,808.1,253.6,808.1,265.9z" />
          </svg>
        </button>
        <ul className="Menu__items">
          <li className="Menu__item">
            <Link className="Menu__link" to="/" onClick={() => { handleClick() }}>Accueil</Link>
          </li>
          {restaurantsInfos.map((restaurantInfo, id) =>
            <li className="Menu__item" key={id}>
              <Link className="Menu__link" to={"/restaurants/" + restaurantInfo._id} onClick={() => { handleClick() }}>{restaurantInfo.title}</Link>
            </li>
          )}
          <li className="Menu__item">
            <Link className="Menu__link" to="/recipes" onClick={() => { handleClick() }}>Recette</Link>
          </li>
          <li className="Menu__item">
            <Link className="Menu__link" to="/articles" onClick={() => { handleClick() }}>Presse</Link>
          </li>
        </ul>
      </div>
      <div className="Menu__image"></div>
      <Link className="Menu__button" to="/contact" onClick={() => { handleClick() }}>Contact</Link>
    </section>
  );
};

export default Menu;
