import Router, { useRouter } from "next/router";
import React from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { loginState } from "../../model/UserModel/atoms";
import { getSuccessState } from "../../model/UserModel/selector";

interface Props {}

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("/background.png");
    span {
      font-size: 25px;
      margin: 15px;
    }
  `,
};

const CodeRedirect = (props: Props) => {
  const router = useRouter();
  const [isLogged, setLogged] = useRecoilState(loginState);
  console.log(router.query.code);
  const getSuccess = () => {
    const isSuccessState = useRecoilValueLoadable(getSuccessState(router.query.code));
    switch (isSuccessState.state) {
      case "hasError":
        return "불러오는 중 에러가 발생했습니다.";
      case "loading":
        return "잠시 기다려주세요...";
      case "hasValue":
        setLogged(true);
        Router.push("/rank");
        return "완료!";
    }
  };
  return (
    <S.Positioner>
      <span>{getSuccess()}</span>
    </S.Positioner>
  );
};

export default CodeRedirect;
