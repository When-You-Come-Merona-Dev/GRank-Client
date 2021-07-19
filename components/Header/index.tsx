import React from "react";

import * as S from "./styled";

interface IHeader {
  userGithubLogin: any;
  isLogged: boolean;
  username: string;
  showAdminLinkModal: () => void;
  handleLogout: () => void;
}

const Header: React.FC<IHeader> = ({ isLogged, username, handleLogout, userGithubLogin, showAdminLinkModal }) => {
  return (
    <S.Positioner>
      <S.HeaderWrapper>
        <S.TitleWrapper>
          <strong>GRANK</strong>
          <span>광주소프트웨어 마이스터고등학교 학생 깃허브 커밋 랭킹 사이트</span>
        </S.TitleWrapper>
        <S.MenuWrapper>
          {!isLogged ? (
            <>
              <span onClick={userGithubLogin}>Github 로그인</span>
              <span onClick={showAdminLinkModal}>관리자 로그인</span>
            </>
          ) : (
            <>
              <span>{username}님 환영합니다!</span>
              <span onClick={handleLogout}>로그아웃</span>
            </>
          )}
        </S.MenuWrapper>
      </S.HeaderWrapper>
    </S.Positioner>
  );
};

export default Header;
