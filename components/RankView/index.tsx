import React from "react";
import Title from "./Title";
import * as S from "./styled";
import RankItem from "./RankItem";

interface IRankItem {
  rank?: number;
  id: number;
  username: string;
  grade: number;
  avatar_url: string;
  commit_count: number;
  is_approved: boolean;
  groups: Array<any>;
}

interface IRankView {
  rankList: IRankItem[] | string;
  filterGrade: number;
  linkToNewTap: (url) => void;
  showAddPersonModal: () => void;
  setGradeFilter: () => void;
  setAllFilter: () => void;
}

const RankView: React.FC<IRankView> = ({ filterGrade, rankList, linkToNewTap, showAddPersonModal, setGradeFilter, setAllFilter }) => {
  return (
    <S.Positioner>
      <Title gradeFilter={filterGrade} showAddPersonModal={showAddPersonModal} setGradeFilter={setGradeFilter} setAllFilter={setAllFilter} />
      <S.RankListTitleWrapper>
        <span>Profile</span>
        <span>Rank</span>
        <span>Commit Count</span>
        <span>Grade</span>
        <span>Groups</span>
      </S.RankListTitleWrapper>
      <S.RankListWrapper>
        {typeof rankList === "object" ? (
          rankList.length === 0 ? (
            <div>랭킹에 인원이 없습니다.</div>
          ) : (
            rankList
              .filter(info => info.is_approved)
              .map((info, index) => <RankItem key={index} rank={index + 1} {...info} linkToNewTap={linkToNewTap} />)
          )
        ) : (
          <div>{rankList}</div>
        )}
      </S.RankListWrapper>
    </S.Positioner>
  );
};

export default React.memo(RankView);
