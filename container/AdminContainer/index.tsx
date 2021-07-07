import React, { useCallback } from "react";
import { useRecoilValueLoadable } from "recoil";

import { AdminView } from "../../components";

import useModal from "../../hooks/useModal";
import { commitRank } from "../../model/RankModel/atoms";

const AdminContainer: React.FC = () => {
  const { addModal } = useModal();

  const handleLoadNotAllowUsers = useCallback(() => {
    const status = useRecoilValueLoadable(commitRank(1));
    switch (status.state) {
      case "hasError":
        return null;
      case "loading":
        return "값을 불러오는 중입니다..";
      case "hasValue":
        return status.contents;
    }
  }, []);
  const handleAddAllowModal = () => {
    addModal({
      key: "AllowUser",
    });
  };
  return <AdminView notAllowUserList={handleLoadNotAllowUsers()} addAllowModal={handleAddAllowModal} />;
};

export default AdminContainer;
