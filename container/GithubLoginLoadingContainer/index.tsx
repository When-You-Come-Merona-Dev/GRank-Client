import React from "react";
import Router, { useRouter } from "next/router";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

import { GithubLoginLoadingView } from "../../components";

import { loginState } from "../../model/UserModel/atoms";
import { getSuccessState } from "../../model/UserModel/selector";

const GithubLoginLoadingContainer = () => {
  const router = useRouter();
  const [isLogged, setLogged] = useRecoilState(loginState);

  const githubLoginLoadingState = () => {
    const isSuccessStatus = useRecoilValueLoadable(getSuccessState(router.query.code));
    switch (isSuccessStatus.state) {
      case "hasError":
        return "불러오는 중 에러가 발생했습니다.";
      case "loading":
        return "잠시 기다려주세요...";
      case "hasValue":
        setLogged(true);
        Router.push("/");
        return "완료!";
    }
  };
  return <GithubLoginLoadingView successState={githubLoginLoadingState()} />;
};

export default GithubLoginLoadingContainer;
