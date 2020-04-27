import React from 'react'
import map from '../../../assets/img/map.png'

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
        <img src={map} className="Footer-rightSide-map" alt="Carte" />
      </div>
    </div>
  )
}

export default Footer;
