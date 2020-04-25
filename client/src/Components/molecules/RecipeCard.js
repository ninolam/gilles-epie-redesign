import React from 'react';
import { Link } from "react-router-dom";

import { CardContainer, Card, CardTextContainer, CardImageContainer,CardTitleDate, CardTitle, CardDescription, CardButton } from './RecipeCardStyled'

const RecipeCard = ({ recipe, path }) => {
    return (
        <CardContainer>
            <Card>
                <CardTextContainer>
                    <CardTitleDate>
                        14 juin 2020
                </CardTitleDate>
                    <CardTitle>
                        {recipe.title}
                    </CardTitle>
                    <CardDescription>
                        {recipe.preparation}
                    </CardDescription>
                    <Link to={{
                        pathname: `recipes/${recipe._id}`,
                        state: { id: recipe._id }
                    }}>
                        <CardButton>
                            Lire plus <span>></span>
                        </CardButton>
                    </Link>
                </CardTextContainer>
                <CardImageContainer />
            </Card>
        </CardContainer>
    )
}

export default RecipeCard;
