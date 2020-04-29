import React from 'react'
import map from '../../../assets/img/map.jpg'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__wrapper content-wrapper">
        <div className="Footer-leftSide">
          <p className="Footer-leftSide__title title-h2"><span>Hello,</span> besoin de quelque chose ?</p>
          <div className="Footer-leftSide__formula">
            <input className="Footer-leftSide__formula-input" placeholder="Nom" />
            <input className="Footer-leftSide__formula-input" placeholder="Email" />
            <textarea className="Footer-leftSide__formula-input Footer-leftSide__formula-textarea" placeholder="Message" />
            <button className="Footer-leftSide__formula-button button-link">Envoyer</button>
          </div>
        </div>
      </div>
      <div className="Footer-rightSide">
        <div className="popin">
          <div className="popin-circle"></div>
          <div className="popin-square">
            <p className="popin-square__head">Nous sommes <span className="popin-square__head_underline">ici</span></p>
            <p>
              32 Avenue du Grand Bouvelard
              <br />
              Paris, 75004
            </p>
          </div>
        </div>
        <img src={map} className="Footer-rightSide-map" alt="Carte" />
      </div>
    </div>
  )
}

export default Footer;
