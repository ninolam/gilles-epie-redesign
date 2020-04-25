import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Recipes from './Recipes'
import MainImgSrc from '../../assets/details-img.png';

const RecipeContent = styled.div`
    max-width: 720px;
    margin: 0 auto;
`;

const MainTitle = styled.h1`
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    font-style: italic;
`;

const MainImg = styled.img`
    width: 100%;
    height: auto;
    margin-top: 80px;
`;
const TitlePresentation = styled.h2`
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.8px;
    margin: 80px 0 15px;
    span {
        color: #a0a4b8;
    }
`;

const TextPresentation = styled.p`
    font-family: 'Karla', sans-serif;
    font-size: 18px;
    line-height: 28px;
`;

const ListPresentation = styled.ul`
    list-style-type: none;
    font-family: 'Karla', sans-serif;
    font-size: 18px;
    &:first-letter{
        text-transform: uppercase;
    }
    li {
        margin-top: 10px;
    }
`;

const Recipe = ({ location }) => {

    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const id = location.state.id;
        console.log(id)
        axios.get("http://localhost:27017/api/recipes/" + id)
            .then(res => {
                setRecipe(res.data)
            })
    }, []);


    return (
            <RecipeContent>
                <MainTitle>{recipe.title}</MainTitle>
                <MainImg src={MainImgSrc} alt="" />
                <TitlePresentation>
                    Ingrédients <span>(pour {recipe.number_of_persons} personnes)</span>
                </TitlePresentation>
                <ListPresentation>
                    {recipe.ingredients && recipe.ingredients.map((ingredient, id) => <li key={id}>{ingredient}</li>)}
                </ListPresentation>
                <TitlePresentation>
                    Progression
            </TitlePresentation>
                <ListPresentation>
                    {recipe.preparation && recipe.preparation.split('\n').map((preparation, id) => <li key={id}>{preparation}</li>)}
                </ListPresentation>
                {recipe.dressing &&
                    <>
                        <TitlePresentation>
                            Dressing
                        </TitlePresentation>
                        <TextPresentation>
                            {recipe.dressing}
                        </TextPresentation>
                    </>
                }
            </RecipeContent>

    )
}

export default Recipe;
