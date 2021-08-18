import Image from "next/image";
import styled from "styled-components"

export const Positioner = styled.tr<{ rank: number }>`
    width: 100%;
    & > th {
        text-align: center;
        font-weight: bold;
        font-size : 20px !important;
        color : #000 !important;
        @media (max-width : 425px) {
            font-size:  15px !important
        }
    }
    & > th:nth-child(2) {
        font-size : ${props => props.rank > 3 ? `20px` : `35px`}
    }
    @media (max-width : 425px) {
        & > th:nth-child(2) {
            font-size : ${props => props.rank > 3 ? `15px` : `25px`}
        }
    }
    
    border-bottom : 1px solid #c3c3c3;
`;

export const ProfileImage = styled(Image)`
    border-radius: 100px;
`;

export const GithubIcon = styled(Image)`
    cursor: pointer;
    float: left;
`;

export const ProfileInfo = styled.th`
    & > div {
        display: flex;
        align-items : center;
    }
    & > th:last-child {
        float: left;
    }

    color : #CECECE;
`;

export const IdText = styled.span`
    color : #000 !important;
    font-weight : bold;
    font-size : 18px;
    @media (max-width : 425px) {
        font-size : 15px;
    }
`;

export const RankText = styled.th`
    @media (max-width : 425px) {
        font-size : 15px;
    }
`;

export const CommitCountText = styled(RankText)``;

export const GradeText = styled(RankText)``;

export const GroupListWrapper = styled.th`
    color : #CDCDCD !important;
    @media (max-width : 425px) {
        display : none;
    }
`;
