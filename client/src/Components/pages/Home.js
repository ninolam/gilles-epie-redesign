import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Heading from './../organisms/Heading/Heading'
import Restaurants from './../organisms/Restaurants/Restaurants'
import Press from './../organisms/Press/Press'
import Biography from './../organisms/Biography/Biography'
import Recipes from './../organisms/Recipes/Recipes'

const Home = () => {

  const [infos, setInfos] = useState({})

  useEffect(() => {
    axios.get("http://localhost:27017/api/infos")
      .then(res => {
        setInfos(res.data[0])
      })
  }, []);
  

  return (
    <div className="Home">
      <Heading portraits={infos.portraits_url} />
      <Restaurants />
      <Press />
      <Biography />
      <Recipes />
    </div>
  )
}

export default Home;
