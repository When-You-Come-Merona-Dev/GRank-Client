import Image from "next/image";
import styled from "styled-components"


export const Positioner = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleWrapper = styled.div`
    width: 100%;
    height: 15vh;
    display : flex;
    align-items: center;
    justify-content: center;
    background-color: #90AFFF;
`;

export const AdminTitleWrapper = styled.div`
    width : 50%;
    padding : 25px 0;
    border-bottom : 2px solid #90AFFF;
    span {
        font-size : 24px;
        padding: 10px 30px;
        color : #FFFFFF !important;
        font-weight: bold;
    }
    display : flex;
`;

export const NotAllowUserListWrapper = styled.div`
    display : inline-block;
    width: 100%;
    & > span {
        margin : 15px;
        font-size : 21px;
    }
`;

