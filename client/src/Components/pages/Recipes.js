import React, { useState, useEffect } from 'react';
import RecipeCard from '../molecules/RecipeCard'
import axios from 'axios'

import styled from 'styled-components';

const RecipesContainer = styled.main`
    height: 100%;
    width: 100%;
    background: linear-gradient(#ffffff 50vh ,#f8f8f8 50vh);
`;

const RecipesContent = styled.div`
    max-width: 1145px;
    margin: 0 auto;
`;

const MainTitle = styled.h1`
    font-family: 'Karla', sans-serif;
    font-size: 48px;
    font-weight: bold;
    letter-spacing: -2px;
`;

const Recipes = ({title, path}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:27017/api/recipes/`)
            .then(res => {
                setRecipes(res.data)
            })
    }, []);

    return (
        <RecipesContainer>
            <RecipesContent>
                <MainTitle>{title}</MainTitle>
                {recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} path={path} />)}
            </RecipesContent>
        </RecipesContainer>
    )
}

export default Recipes;
