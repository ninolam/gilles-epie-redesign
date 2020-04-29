import React from "react";

const Konami = ({ setIsKonamiCodeFounded }) => {
  return (
    <div id="konami">
      <span onClick={() => setIsKonamiCodeFounded(false)}>X</span>
      <ul>
        <li>Maxime CHARPENTIER</li>
        <li>Sophia GOUNANI</li>
        <li>Alexandre DELALOY</li>
        <li>Nancy CAMPBELL</li>
        <li>Nino LAMOUREUX</li>
        <li>Jason GOUROVITCH</li>
        <li>Nicolas MARTIN</li>
        <li>José GUIGNERY TEIXEIRA</li>
      </ul>
    </div>
  );
};

export default Konami;
