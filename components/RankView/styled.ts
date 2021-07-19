import styled from "styled-components"

export const Positioner = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    flex-direction: column;
    align-items: center;
`;

export const RankListTitleWrapper = styled.div`
    width : 67%;
    padding : 10px 0;
    margin-top : 25px;
    border-top : 3px solid #D2D2D2;
    border-bottom : 3px solid #D2D2D2;
    span {
        text-align: center;
        padding : 10px 0;
        color : #D2D2D2 !important;
        font-weight: bold;
        font-size : 20px;
    }
    span:nth-child(1) {
        flex: 0.2;
    }
    span:nth-child(2) {
        flex: 0.05;
    }
    span:nth-child(3) {
        flex: 0.2;
    }
    span:nth-child(4) {
        flex: 0.1;
    }
    span:nth-child(5) {
        flex: 0.45;
    }
    display : flex;
`;


export const RankListWrapper = styled.div`
    width : 67%;
    display : flex;
    flex-direction : column;
`;

export const RankItemWrapper = styled.div`
    width : 100%;
    display : flex;
    justify-content: space-between;
    border-bottom : 1px solid #c3c3c3;
`;


export const RankInfoWrapper = styled.div`
    display : flex;
`;