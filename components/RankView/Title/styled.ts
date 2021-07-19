import Image from "next/image";
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
`;
export const RankMenuBtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top : 15px;
    button {
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
    button {
        margin-left : 30px;
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

