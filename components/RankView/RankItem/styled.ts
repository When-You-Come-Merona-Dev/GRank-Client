import Image from "next/image";
import styled from "styled-components"

export const Positioner = styled.div`
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
    }
    border-bottom : 1px solid #c3c3c3;
`;

export const ProfileImage = styled(Image)`
    border-radius: 100px;
`;

export const ProfileInfo = styled.div`
        flex: 0.4;
        display : flex;
        align-items: center;
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        span {
            text-align: center;
            padding : 3px 20px;
            color : #c3c3c3;
        }
`;

export const IdText = styled.span`
    color : #90AFFF !important;
    font-size : 18px;
`;