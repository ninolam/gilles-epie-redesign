import React from 'react';
import { RecipeText } from '../atoms/RecipeText'
import { CardContainer, Card, CardTextContainer, CardImageContainer, CardButton } from './RecipeCardStyled'

const RecipeCard = () => {
    return (
        <CardContainer>
            <Card>
                <CardTextContainer>
                    <RecipeText size="titleDate">
                        14 juin 2020
                </RecipeText>
                    <RecipeText size="title">
                        Ravioli de foie gras de canard au jus de daube
                </RecipeText>
                <RecipeText size="description">
                Recette gastronomique de ravioli de foie gras Ingrédients (pour 6 personnes) Daube de bœuf 300g de joue de bœuf coupée en morceaux 1 litre de vin…
                </RecipeText>
                    <CardButton>
                        Lire plus <span>></span>
                </CardButton>
                </CardTextContainer>
                <CardImageContainer />
            </Card>
        </CardContainer>
    )
}

export default RecipeCard;
