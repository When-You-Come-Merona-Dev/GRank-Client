import Image from "next/image";
import styled from "styled-components"

export const NotAllowUserItem = styled.div`
    float : left;
    margin : 15px;
    min-width : 180px;
    padding : 5px 20px;
    border:  2px solid #90AFFF;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    div {
        display : flex;
        flex-direction: column;
        justify-content: center;
        span {
            font-size : 17px;
        }
        P {
            color : #c3c3c3;
        }
    }
    &:hover {
        background-color: #90AFFF;
        div {
            span {
                color : #fff;
            }
            p{
                color : white;
            }
        }
    }
`;

export const UserProfileImage = styled(Image)`
    border-radius: 100%;
`;