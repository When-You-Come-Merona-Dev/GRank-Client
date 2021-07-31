import Image from "next/image";
import styled from "styled-components"

export const Positioner = styled.tr<{ rank: number }>`
    width: 100%;
    th {
        text-align: center;
        font-weight: bold;
        font-size : 20px;
        color : #000 !important;
    }
    & > th:nth-child(2) {
        font-size : ${props => props.rank > 3 ? `20px` : `35px`}
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
`;

export const RankText = styled.th`
`;

export const CommitCountText = styled.th`
`;

export const GradeText = styled.th`
`;

export const GroupListWrapper = styled.th`
    color : #CDCDCD !important;
`;
