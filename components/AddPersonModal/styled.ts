import Image from "next/image";
import styled from "styled-components"

export const Positioner = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height : 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`;

export const Wrapper = styled.div`
    width : 40%;
    height : 45%;
    display : flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    border-radius : 20px;
`;

export const TitleWrapper = styled.div`
    flex:1;
    display : flex;
    padding : 15px 20px;
    border-bottom : 3px solid #D2D2D2;
    div {
        display : flex;
        align-items: center;
    }
    span {
        padding : 0 5px;
        font-size : 33px;
        font-weight: bold;
        color : #000;
    }
`;

export const AddPersonFormWrapper = styled.div`
    flex: 8;
    background-color: white;
    display : flex;
    align-items: center;
`;

export const ProfileWrapper = styled.div`
    flex: 0.4;
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
        font-size : 24px;
        margin-top : 20px;
        font-weight: bold;
    }
`;

export const ProfileImage = styled(Image)`
    border-radius: 100%;
`;

export const AddPersonForm = styled.div`
    flex: 0.6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        margin: 30px 0;
        font-size : 22px;
        padding : 10px;
        border : none;
        border-bottom: 2px solid #d2d2d2;
    }
`;

export const UserGroupListWrapper = styled.div`
    display : flex;
    flex-direction : column;
    & > span {
        font-size : 18px;
        font-weight: bold;
        color : #8C8C8C;
    }
`;

export const GroupItem = styled.div`
        border : 1px solid #CECECE;
`;

export const AddPersonBtnWrapper = styled.div`
    flex:1;
    background-color: #F6F6F6;
    display : flex;
    justify-content: flex-end;
`;

export const AddPersonBtn = styled.button<{ cancel: boolean }>`
    align-self : flex-end;
    padding : 15px 40px;
    margin: 10px;
    background-color: ${props => props.cancel ? "#FFF": "#63AD73"};
    border: none;
    border-radius: 5px;
    font-size : 18px;
    color : ${props => props.cancel ? "#c9c9c9" : "#fff"}
`;

export const CancelBtn = styled(AddPersonBtn)`
    background: #FFFFFF;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
    color: #949494;
`;