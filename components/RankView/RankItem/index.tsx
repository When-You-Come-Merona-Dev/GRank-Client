import React from "react";
import * as S from "./styled";

interface IRankItem {
  rank?: number;
  id: number;
  username: string;
  avatar_url: string;
  commit_count: number;
  is_approved: boolean;
  groups: Array<any>;
  linkToNewTap: (url) => void;
}

const rankIcon = ["🥇", "🥈", "🥉"];
const RankItem: React.FC<IRankItem> = ({ rank, id, username, commit_count, avatar_url, is_approved, groups, linkToNewTap }) => {
  const url = `https://github.com/${username}`;
  return (
    <S.Positioner>
      <span>
        {rank}
        {rankIcon[rank - 1] || ""}
      </span>
      <S.ProfileInfo>
        <S.ProfileImage width={80} height={80} src={avatar_url} />
        <div>
          <S.IdText>{username}</S.IdText>
          <span>{commit_count} commit</span>
        </div>
      </S.ProfileInfo>
      <span onClick={() => linkToNewTap(url)}>{url}</span>
    </S.Positioner>
  );
};

export default RankItem;
