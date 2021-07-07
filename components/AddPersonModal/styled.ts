import styled from "styled-components"

export const Positioner = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height : 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`;

export const TitleWrapper = styled.div`
    width : 30%;
    height : 10%;
    background-color: #90AFFF;
    color : white;
    display : flex;
    justify-content: center;
    align-items: center;
    font-size : 24px;
    
`;

export const AddPersonFormWrapper = styled.div`
    width: 30%;
    height : 30%;
    background-color: white;
    display : flex;
    justify-content: center;
    align-items: center;
    div {
        height: 100%;
        display : flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin : 10px;
        span {
            font-size : 18px;

        }
        input {
            border : 2px solid #c3c3c3;
            border-radius: 5px;
            padding : 10px 15px;
            font-size : 18px;
        }
    }
`;

export const AddPersonBtnWrapper = styled.div`
    width : 30%;
    height : 5%;
    background-color: white;
    display : flex;
    justify-content: flex-end;
`;

export const AddPersonBtn = styled.button<{ cancel: boolean }>`
    align-self : flex-end;
    padding : 15px 25px;
    margin: 10px;
    background-color: ${props => props.cancel ? "#FF8E99": "#90AFFF"};
    color : white;
    border: none;
    border-radius: 5px;
`;