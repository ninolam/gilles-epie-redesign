import React, { useState, useEffect } from "react";
import axios from "axios";
import "./_Restaurant.scss";

const Restaurant = ({ computedMatch }) => {
  const [item, setItem] = useState({})
  
    useEffect(() => {  
      axios.get("http://localhost:27017/api/restaurants/" + computedMatch.params.id)
          .then(res => {
            setItem(res.data)
            window.scrollTo(0, 0);
        })
    document.title = item.title
    }, [computedMatch.params.path, computedMatch.params.id, item.title]);

  useEffect(() => {
    axios
      .get("http://localhost:27017/api/restaurants/" + computedMatch.params.id)
      .then((res) => {
        setItem(res.data);
      });
    document.title = item.title;
  }, [
    computedMatch.params.path,
    computedMatch.params.id,
    item.title,
    item.header_pictures,
  ]);

  return (
    <div>
      <div className="restaurant_header">
        <h2>{item.title}</h2>
        <div className="restaurant_header_pictures">
          {item.header_pictures ? item.header_pictures.map((value) => {
              return <img className="restaurant_header_pictures_img" src={value} alt=""/>
            }) : null}
        </div>
      </div>
      <div className="restaurant">
        <h1>{item.subtitle}</h1>
        <p className="restaurant_description">
          {item.description}
          <br />
          <br />
          <br />
          Découvrir le restaurant :
          <br />
          <br />
          {item.name}
          <br />
          <br />
          <br />
          {item.adress}
          <br />
          <br />
          <br />
          {item.city} {item.zipcode}
          <br />
          <br />
          <br />
          Service voiturier
          <br />
          <br />
          <br />
          tel: {item.phone}
          {item.fax ? (
            <span>
              <br />
              <br />
              <br /> {item.fax}
            </span>
          ) : (
            ""
          )}
          <br />
          <br />
          <br />
          {item.website}
          {/* Site de gilles */}
          {item.portfolio ? (
            <span>
              <br />
              <br />
              <br /> {item.portfolio}
            </span>
          ) : (
            ""
          )}
          {/* Mail de gilles */}
          {item.mail ? (
            <span>
              <br />
              <br />
              <br /> {item.mail}
            </span>
          ) : (
            ""
          )}
          {/* Comment s'y rendre en métro */}
          {item.way ? (
            <span>
              <br />
              <br />
              <br /> {item.way}
            </span>
          ) : (
            ""
          )}
          <br />
          <br />
          <br />
          {item.schedules}
        </p>
        <div className="restaurant_footer_img_container">
          {item.footer_pictures
            ? item.footer_pictures.map((pic) => (
                <img className="restaurant_footer_img" src={pic} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
