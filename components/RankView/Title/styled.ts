import styled, {css} from "styled-components";

export const Positioner = styled.div`
    width: 100%;
    padding : 40px 0;
    display : flex;
    align-items: center;
    justify-content: space-evenly;
    background: url('/background.png');
`;



export const RankMenuWrapper = styled.div`
    display : flex;
    flex-direction: column;
    & > span {
        font-weight : bold;
        font-size: 40px;
    }
    @media (max-width : 768px) {
        & > span {
            font-size : 30px;
            padding-left : 20px;
        }
    }
`;
export const RankMenuBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top : 15px;
    @media (max-width : 1024px) {
        justify-content: center;
    }
    @media (max-width : 425px) {
        flex-direction: column;

    }
    button {
        @media (max-width : 768px) {
            padding : 15px 40px;
            font-size : 15px;
        }
        @media (max-width : 425px) {
            padding : 10px 25px;
            margin : 5px;
        }
        margin-right: 10px;
        padding : 10px;
        background-color: #63AD73;
        border-radius : 25px;
        border : none;

        font-size : 15px;
        color: #fff;
    }

`;


export const RankFilterWrapper = styled.div<{filter : number}>`
    align-self : flex-start;
    margin-top : 40px;
    @media (max-width : 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    button {
        @media (max-width: 768px) {
            padding:  10px 30px;
            margin: 10px 0;
        }
        margin-left : 25px;
        padding: 10px 55px;
        background-color: #fff;
        border : 2px solid #c9c9c9;
        border-radius : 40px;

        font-weight : bold;
        color : #c9c9c9
    }
    button:hover {
        border-color : #63AD73;
        color : #63AD73;
    }
        ${props => props.filter > 0
    ? css`
        button:nth-child(3) {
            border-color : #63AD73;
            color : #63AD73;
        }
    `
    : css`
        button:nth-child(1) {
            border-color : #63AD73;
            color : #63AD73;
        }
    `
    };
`;

