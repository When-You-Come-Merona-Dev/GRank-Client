import styled from "styled-components"

export const Positioner = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    flex-direction: column;
    align-items: center;
`;

export const RankListTable = styled.table`
    border-collapse: collapse;
    min-width: 1250px;
    tr {
        text-align: left;
    }
    tr > th {
        text-align: center;
        padding : 12px 60px;
        color : #CDCDCD;
        font-weight: bold;
        font-size : 20px;
    }
    tr > th:first-child {
        padding : 12px 80px;
    }
    tr > th:last-child {
        padding : 12px 150px;
    }
`;

export const RankListTitleWrapper = styled.thead`
    margin-top : 25px;
    border-top : 3px solid #D2D2D2;
    border-bottom : 3px solid #D2D2D2;
`;


export const RankListWrapper = styled.tbody`

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