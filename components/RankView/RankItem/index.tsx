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
  groups: Array<string>;
  linkToNewTap: (url) => void;
}

const rankIcon = ["π₯", "π₯", "π₯"];
const RankItem: React.FC<IRankItem> = ({ rank, id, username, commit_count, grade, avatar_url, is_approved, groups, linkToNewTap }) => {
  const url = `https://github.com/${username}`;
  return (
    <S.Positioner rank={rank}>
      <S.ProfileInfo>
        <div>
          <S.ProfileImage width={80} height={80} src={avatar_url} />
          <div>
            <S.IdText>{username}</S.IdText>
            <br />
            <S.GithubIcon width={20} height={20} src={"/githubIcon.png"} onClick={() => linkToNewTap(url)} />
          </div>
        </div>
      </S.ProfileInfo>
      <S.RankText>{rankIcon[rank - 1] || rank}</S.RankText>
      <S.CommitCountText>{commit_count.toLocaleString()} commit</S.CommitCountText>
      <S.GradeText>{grade}νλ</S.GradeText>
      <S.GroupListWrapper>{groups.toString() || "κ·Έλ£Ή μμ"}</S.GroupListWrapper>
    </S.Positioner>
  );
};

export default RankItem;
