import React from "react";
import * as S from "./styled";

interface ITItle {
  showAddPersonModal: () => void;
  setGradeFilter: () => void;
}

const Title: React.FC<ITItle> = ({ gradeFilter, showAddPersonModal, setGradeFilter, setAllFilter }) => {
  return (
    <S.Positioner>
      <S.RankMenuWrapper>
        <span>GSM</span>
        <span>Github Commit</span>
        <span>Ranking</span>
        <S.RankMenuBtnWrapper>
          <button onClick={showAddPersonModal}>랭킹에 참여하기</button>
          <button>그룹 추가</button>
          <button>그룹에 유저 추가</button>
        </S.RankMenuBtnWrapper>
      </S.RankMenuWrapper>
      <S.RankFilterWrapper filter={gradeFilter}>
        <button onClick={setAllFilter}>전체 순위</button>
        <button>그룹 순위</button>
        <button onClick={setGradeFilter}>학년 별 순위</button>
      </S.RankFilterWrapper>
    </S.Positioner>
  );
};

export default Title;
