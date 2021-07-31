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
      <S.RankListTable>
        <S.RankListTitleWrapper>
          <tr>
            <th>Profile</th>
            <th>Rank</th>
            <th>Commit Count</th>
            <th>Grade</th>
            <th>Groups</th>
          </tr>
        </S.RankListTitleWrapper>
        <S.RankListWrapper>
          {typeof rankList === "object" ? (
            rankList.length === 0 ? (
              <div>랭킹에 인원이 없습니다.</div>
            ) : (
              rankList
                .filter(info => info.is_approved)
                .filter(info => {
                  if (filterGrade === 0) {
                    return info;
                  }
                  return filterGrade === info.grade;
                })
                .map((info, index) => <RankItem key={index} rank={index + 1} {...info} linkToNewTap={linkToNewTap} />)
            )
          ) : (
            <div>{rankList}</div>
          )}
        </S.RankListWrapper>
      </S.RankListTable>
    </S.Positioner>
  );
};

export default React.memo(RankView);
