import Router from "next/router";
import React, { useEffect } from "react";

import * as S from "./styled";

import NotAllowItem from "./NotAllowItem";

interface IRankItem {
  id: number;
  username: string;
  avatar_url: string;
  commit_count: number;
  is_approved: boolean;
  groups: Array<any>;
}

interface IAdminView {
  notAllowUserList: IRankItem[];
  addAllowModal: () => void;
}

const AdminView: React.FC<IAdminView> = ({ notAllowUserList, addAllowModal }) => {
  useEffect(() => {
    if (!sessionStorage.getItem("admin_token")) {
      Router.push("/rank");
      alert("어드민 전용 계정이 없으먼 접근하실 수 없습니다.");
    }
  }, []);
  return (
    <S.Positioner>
      <S.TitleWrapper>
        <S.AdminTitleWrapper>
          <span>ADMIN 유저 승인 페이지</span>
        </S.AdminTitleWrapper>
      </S.TitleWrapper>
      <S.NotAllowUserListWrapper>
        {typeof notAllowUserList === "object" ? (
          notAllowUserList.length === 0 ? (
            alert("승인 대기 중인 인원이 없습니다.")
          ) : (
            notAllowUserList.filter(info => !info.is_approved).map(({ username, commit_count, avatar_url }) => <NotAllowItem username={username} commit_count={commit_count} avatar_url={avatar_url} addAllowModal={addAllowModal} key={username} />)
          )
        ) : (
          <div>{notAllowUserList}</div>
        )}
      </S.NotAllowUserListWrapper>
    </S.Positioner>
  );
};

export default AdminView;
