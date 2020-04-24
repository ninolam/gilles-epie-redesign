import React, { useState, useEffect } from 'react';
import RecipeCard from '../molecules/RecipeCard'
import axios from 'axios'

import styled from 'styled-components';

const RecipeContainer = styled.main`
    height: 100%;
    width: 100%;
    background: linear-gradient(#ffffff 50vh ,#f8f8f8 50vh);
`;

const RecipeContent = styled.div`
    max-width: 1145px;
    margin: 0 auto;
`;


const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:27017/api/recipes/`)
            .then(res => {
                console.log(res.data)
                const allRecipes = res.data;
                setRecipes(recipes.push(allRecipes))
                console.log(recipes)
            })
    }, [recipes]);

    return (
        <RecipeContainer>
            <RecipeContent>
                <h1>Recettes</h1>
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </RecipeContent>
        </RecipeContainer>
    )
}

export default Recipes;
