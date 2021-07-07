import React from "react";
import Title from "./Title";
import * as S from "./styled";
import RankItem from "./RankItem";
import Image from "next/image";

interface IRankItem {
  rank?: number;
  id: number;
  username: string;
  avatar_url: string;
  commit_count: number;
  is_approved: boolean;
  groups: Array<any>;
}

interface IRankView {
  rankList: IRankItem[] | string;
  showAddPersonModal: () => void;
  showAdminLinkModal: () => void;
  linkToNewTap: (url) => void;
}

const RankView: React.FC<IRankView> = ({ rankList, linkToNewTap, showAddPersonModal, showAdminLinkModal }) => {
  return (
    <S.Positioner>
      <Title />
      <S.ModalOpenLinkWrapper>
        <div onClick={showAddPersonModal}>
          <Image width={20} height={20} src="/PersonAdd.svg" />
          <span>인원추가</span>
        </div>
        <div onClick={showAdminLinkModal}>
          <Image width={20} height={20} src="/PersonAdd.svg" />
          <span>Admin</span>
        </div>
      </S.ModalOpenLinkWrapper>
      <S.RankListTitleWrapper>
        <span>순위</span>
        <span>프로필</span>
        <span>링크</span>
      </S.RankListTitleWrapper>
      <S.RankListWrapper>
        {typeof rankList === "object" ? rankList.length === 0 ? alert("랭킹에 인원이 없습니다.") : rankList.filter(info => info.is_approved).map((info, index) => <RankItem key={index} rank={index + 1} {...info} linkToNewTap={linkToNewTap} />) : <div>{rankList}</div>}
      </S.RankListWrapper>
    </S.Positioner>
  );
};

export default React.memo(RankView);
