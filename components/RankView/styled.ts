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
    width : 85%auto;
    @media (max-width : 1024px) {
        width : 100%;
    }
    tr {
        text-align: left;
    }
    tr > th {
        text-align: center;
        padding : 12px 60px;
        @media (max-width : 1024px) {
            padding : 8px 10px;
        }
        color : #CDCDCD;
        font-weight: bold;
        font-size : 20px;
    }
    tr > th:first-child {
        padding : 12px 80px;
        @media (max-width : 1024px) {
            padding: 8px 40px;
        }
        @media (max-width : 425px) {
            padding : 0;
        }
    }
    tr > th:last-child {
        padding : 12px 150px;
        @media (max-width : 1024px) {
            padding: 8px 80px;
        }
        @media (max-width : 425px) {
            padding : 0;
        }
    }
`;

export const RankListTitleWrapper = styled.thead`
    border-top : 3px solid #D2D2D2;
    border-bottom : 3px solid #D2D2D2;
    @media (max-width : 425px) {
      tr > th {
          font-size : 15px;
      }
      tr > th:nth-child(5) {
          display : none;
      }
    }
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