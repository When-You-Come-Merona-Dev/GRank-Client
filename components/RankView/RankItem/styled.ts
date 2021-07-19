import Image from "next/image";
import styled from "styled-components"

export const Positioner = styled.div<{rank : number}>`
    width : 100%;
    display : flex;
    align-items: center;
    padding: 15px 0;
    text-align: center;
    & > span {
        width : 8%;
        padding : 0 14px;
        text-align: center;
        font-size: 15px;
        color : #000;
        font-weight: bold;
    }
    & > span:nth-child(2) {
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

export const ProfileInfo = styled.div`
        flex: 0.22;
        display : flex;
        align-items: center;
        justify-content: center;
        & > div:last-child {
            padding-left: 15px;
            float: left;
        }
        span {
            width: 100%;
            color : #CECECE;
        }
`;

export const IdText = styled.span`
    color : #000 !important;
    font-weight : bold;
    font-size : 18px;
`;

export const RankText = styled.span`
    flex: 0.03;
`;

export const CommitCountText = styled.span`
    flex:  0.2;
`;

export const GradeText = styled.span`
    flex: 0.09;
`;

export const GroupListWrapper = styled.div`
    flex: 0.49;
    span {
        color : #CECECE;
    }
`;
