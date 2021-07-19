import Router from "next/router";
import React from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { Header } from "../../components";
import useModal from "../../hooks/useModal";
import { loginState } from "../../model/UserModel/atoms";
import { getUserInfo } from "../../model/UserModel/selector";

const clientURL = "https://github.com/login/oauth/authorize?client_id=2cca2281ca2420906073&redirect_uri=http://localhost:3000/success/";

const HeaderContainer: React.FC = () => {
  const [isLogged, setLogged] = useRecoilState(loginState);

  const { addModal } = useModal();

  const handleUserInfo = () => {
    const userinfoState = useRecoilValueLoadable(getUserInfo);
    switch (userinfoState.state) {
      case "hasError":
        return "Error";
      case "loading":
        return "대기중...";
      case "hasValue":
        localStorage.setItem("username", userinfoState.contents.username);
        return userinfoState.contents.username;
    }
  };

  const handleGithubLogin = async () => {
    const newTap = window.open(clientURL);
    newTap.focus();
  };

  const handleLogin = () => {
    handleGithubLogin();
  };

  const handleLogout = () => {
    console.log(isLogged);
    setLogged(false);
    localStorage.clear();
    Router.push("/rank");
    alert("로그아웃!");
  };

  const showAdminLinkModal = () => {
    addModal({
      key: "AdminLink",
      props: {},
    });
  };
  return <Header isLogged={isLogged} handleLogout={handleLogout} username={handleUserInfo()} userGithubLogin={handleGithubLogin} showAdminLinkModal={showAdminLinkModal} />;
};

export default HeaderContainer;
