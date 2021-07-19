import React from "react";
import * as S from "./styled";

interface IRankItem {
  rank?: number;
  id: number;
  username: string;
  grade: number;
  avatar_url: string;
  commit_count: number;
  is_approved: boolean;
  groups: Array<any>;
  linkToNewTap: (url) => void;
}

const rankIcon = ["🥇", "🥈", "🥉"];
const RankItem: React.FC<IRankItem> = ({ rank, id, username, commit_count, grade, avatar_url, is_approved, groups, linkToNewTap }) => {
  const url = `https://github.com/${username}`;
  return (
    <S.Positioner rank={rank}>
      <S.ProfileInfo>
        <S.ProfileImage width={80} height={80} src={avatar_url} />
        <div>
          <S.IdText>{username}</S.IdText>
          <br />
          <S.GithubIcon width={20} height={20} src={"/githubIcon.png"} onClick={() => linkToNewTap(url)} />
        </div>
      </S.ProfileInfo>
      <S.RankText>{rankIcon[rank - 1] || rank}</S.RankText>
      <S.CommitCountText>{commit_count.toLocaleString()} commit</S.CommitCountText>
      <S.GradeText>{grade}학년</S.GradeText>
      <S.GroupListWrapper>
        <span>{groups.toString() || "그룹 없음"}</span>
      </S.GroupListWrapper>
    </S.Positioner>
  );
};

export default RankItem;
