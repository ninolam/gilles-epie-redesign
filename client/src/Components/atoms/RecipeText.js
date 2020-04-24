import styled from 'styled-components';

const sizes = {
    title:{
        fontSize: '24px',
        lineHeight: '36px',
        fontWeight: 'bold',
        textTransfrom: "none",
        paddingBottom: '10px'
    },
    description: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
        textTransfrom: "none",
        paddingBottom: '20px'
    },
    titleDate: {
        fontSize: '11px',
        lineHeight: '20px',
        fontWeight: 'bold',
        textTransfrom: "uppercase",
        paddingBottom: '15px'
    }
}

const RecipeText = styled.p`
    font-family: 'Karla', sans-serif;
    color: #000000;
    font-size:  ${props => sizes[props.size].fontSize};
    line-height: ${props => sizes[props.size].lineHeight};
    font-weight: ${props => sizes[props.size].fontWeight};
    text-transform: ${props => sizes[props.size].textTransfrom};
    padding-bottom: ${props => sizes[props.size].paddingBottom};
`;

export {RecipeText}