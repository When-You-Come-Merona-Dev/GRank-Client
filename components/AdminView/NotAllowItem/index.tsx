import React from "react";

import * as S from "./styled";

interface INotAllowItem {
  username: string;
  commit_count: number;
  avatar_url: string;
  addAllowModal: () => void;
}

const NotAllowItem: React.FC<INotAllowItem> = ({ username, commit_count, avatar_url, addAllowModal }) => {
  return (
    <S.NotAllowUserItem onClick={addAllowModal}>
      <S.UserProfileImage width={70} height={70} src={avatar_url} />
      <div>
        <span>{username}</span>
        <p>{commit_count} commit</p>
      </div>
    </S.NotAllowUserItem>
  );
};

export default NotAllowItem;
