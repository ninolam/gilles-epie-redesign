import styled from 'styled-components';
import img from '../../assets/recipe-img.png';

const CardContainer = styled.article`
    width: 100%;
    display: flex;
    &:nth-child(odd) {
        justify-content: flex-end;
        margin-top:-45px;
    }
    &:nth-child(even) {
        margin-top:-150px;
    }
    &:nth-of-type(1) {
        margin-top: 100px;   
    }
`;
const Card = styled.div`
    display: flex;
    width: calc(100% / 2 - 15px);
    height: 340px;
    background: #ffffff;
`;

const CardTextContainer = styled.div`
    width: 65%;
    padding: 30px 50px;
`;

const CardImageContainer = styled.div`
    width: 35%;
    background-image: url(${img});
    background-size: contain;
    background-repeat: no-repeat;
`;

const CardButton = styled.button`
    font-family: 'Karla', sans-serif;
    color: #ff6f7b;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10px 0;
    letter-spacing: 1px;
    span{
        padding-left: 5px;
        font-size: 13px;
    }
`;

export {CardContainer, Card, CardTextContainer, CardImageContainer, CardButton} ;