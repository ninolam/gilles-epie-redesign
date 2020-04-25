import React from 'react'
import map from '../../assets/img/map.png'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-leftSide">
                <p className="footer-leftSide__title"><span className="footer-leftSide__title-accent">Hello,</span> besoin de<br/>quelque chose ?</p>
                <div className="footer-leftSide__formula">
                    <input className="footer-leftSide__formula-input" placeholder="Nom" />
                    <input className="footer-leftSide__formula-input" placeholder="Email" />
                    <textarea className="footer-leftSide__formula-input footer-leftSide__formula-textarea" placeholder="Message" />
                    <button className="footer-leftSide__formula-button">Envoyer</button>
                </div>
            </div>
            <div className="footer-rightSide">
                <img src={map} className="footer-rightSide-map" alt="Carte" />
            </div>
        </div>
    )
}

export default Footer;
