import React from "react";

import * as S from "./styled";

interface IGithubLoginLoadingView {
  successState: string;
}

const GithubLoginLoadingView: React.FC<IGithubLoginLoadingView> = ({ successState }) => {
  return (
    <S.Positioner>
      <span>{successState}</span>
    </S.Positioner>
  );
};

export default GithubLoginLoadingView;
