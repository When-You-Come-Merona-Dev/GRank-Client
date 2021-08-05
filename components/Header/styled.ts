import styled from "styled-components"


export const Positioner = styled.div`
    width : 100%;
    height : 80px;
`;

export const HeaderWrapper = styled.div`
    width : 100%;
    @media (max-width : 1024px) {
        width: calc(100%);
    }
    height : 100%;
    display : flex;
    justify-content: space-around;
    align-items: center;
    background-color: #63AD73;
`;
export const TitleWrapper = styled.div`
    display : flex;
    flex-direction: column;
    strong {
        font-size : 24px;
        color: #fff;
    }
    span {
        color : #fff;
    }
    @media (max-width : 600px) {
        span {
            display : none;
        }
    }
`;

export const MenuWrapper = styled.div`
    display : flex;
    & > * {
        cursor: pointer;
        padding-left : 12px;
        color : #fff;
        font-weight : bold;
    }
`;

