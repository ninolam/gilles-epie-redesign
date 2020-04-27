import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";

const Header = () => {

  const [ brand ] = useState('Gille Epie')

  const [socialItems, setSocialItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:27017/api/socials")
      .then(res => {
        setSocialItems(res.data)
        console.log(res.data)
      })
  }, []);

  return (
    <header className="Header">
      <div className="Header__wrapper content-wrapper">
        <div className="Header__container">
          <Link to="/">
            <h1 className="Header__brand">{brand}</h1>
          </Link>
          <ul className="Header__items">
            {socialItems.map((socialItem, id) =>
              <li className="Header__item" key={id}>
                <a className="Header__link" href={socialItem.url} target="_blank">{socialItem.name}</a>
              </li>
            )}
          </ul>
        </div>
        <button className="Header__burger"></button>
      </div>
    </header>
  );
};

export default Header;
