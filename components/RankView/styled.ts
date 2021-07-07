import styled from "styled-components"

export const Positioner = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    flex-direction: column;
    align-items: center;
`;

export const RankListTitleWrapper = styled.div`
    width : 50%;
    padding : 25px 0;
    border-bottom : 2px solid #90AFFF;
    span {
        padding: 10px 30px;
        color : #90AFFF !important;
        font-weight: bold;
    }
    & > span:nth-child(2) {
        flex: 0.38;
        padding: 10px 23px;
        padding-right : 55px;
    }
    display : flex;
`;

export const ModalOpenLinkWrapper = styled.div`
    width : 50%;
    display : flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    span {
        padding: 3px;
        color : #c3c3c3;
        font-size : 14px;
    }
`;


export const RankListWrapper = styled.div`
    width : 50%;
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