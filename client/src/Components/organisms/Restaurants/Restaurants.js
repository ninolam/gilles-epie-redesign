import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

const Restaurants = () => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    axios.get("http://localhost:27017/api/restaurants")
      .then(res => {
        setRestaurants(res.data)
      })
  }, []);

  return (
    <section className="Restaurants">
      <div className="Restaurants__wrapper content-wrapper">
        {restaurants.map((restaurant, id) =>
          <div className="Restaurants__restaurant" key={id}>
            <div className="Restaurants__container">
              <p className="Restaurants__location">{restaurant.city}</p>
              <div className="Restaurants__image" style={{backgroundImage: `url(${restaurant.header_pictures[0]})`}}></div>
            </div>
            <div className="Restaurants__container">
              <h2 className="Restaurants__title title-h2">{restaurant.title}</h2>
              <p className="Restaurants__text text-large">{restaurant.resume}</p>
              <Link className="Restaurants__link button-link--with-icon" to={"/restaurants/" + restaurant._id}>
                <span>Détails</span>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
                  <path d="M31.3,97.5c-2.6,0-5.1-1-7.1-2.9c-3.9-3.9-3.9-10.3,0-14.2L54.5,50L24.2,19.6c-3.9-3.9-3.9-10.3,0-14.2    c3.9-3.9,10.3-3.9,14.2,0l37.5,37.5c1.9,1.9,2.9,4.4,2.9,7.1s-1.1,5.2-2.9,7.1L38.4,94.6C36.4,96.5,33.8,97.5,31.3,97.5z" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Restaurants;
