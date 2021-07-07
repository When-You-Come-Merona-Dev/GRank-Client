import React, { useCallback } from "react";
import { useRecoilValueLoadable } from "recoil";
import { RankView } from "../../components";
import useModal from "../../hooks/useModal";
import { commitRank } from "../../model/RankModel/atoms";

const RankContainer: React.FC = () => {
  const { addModal } = useModal();

  const linkToNewTap = url => {
    const newTap = window.open(url, "_blank");
    newTap.focus();
  };

  const handleLoadCommitRanks = useCallback(() => {
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

  const showPersonModal = () => {
    addModal({
      key: "AddPeople",
      props: {},
    });
  };

  const showAdminLinkModal = () => {
    addModal({
      key: "AdminLink",
      props: {},
    });
  };

  return <RankView showAdminLinkModal={showAdminLinkModal} showAddPersonModal={showPersonModal} rankList={handleLoadCommitRanks()} linkToNewTap={linkToNewTap} />;
};

export default RankContainer;
