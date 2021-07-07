import React from "react";
import * as S from "./styled";

const Title: React.FC = () => {
  return (
    <S.Positioner>
      <S.TitleWrapper>
        <S.TitleText>GRank</S.TitleText>
        <S.SubTitleText>광주소프트웨어마이스터고등학교 학생들의 동기부여를 위한 커밋랭킹</S.SubTitleText>
      </S.TitleWrapper>
    </S.Positioner>
  );
};

export default Title;
