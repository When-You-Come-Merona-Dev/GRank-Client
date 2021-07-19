import React, { useCallback } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { RankView } from "../../components";
import useModal from "../../hooks/useModal";
import { commitRank, gradeFilterState } from "../../model/RankModel/atoms";
import { loginState } from "../../model/UserModel/atoms";

const RankContainer: React.FC = () => {
  const [isLogged, setLogged] = useRecoilState(loginState);
  const [gradeFilter, setGrade] = useRecoilState(gradeFilterState);

  const { addModal } = useModal();

  const linkToNewTap = url => {
    const newTap = window.open(url, "_blank");
    newTap.focus();
  };

  const showRankEnrollModal = () => {
    if (!isLogged) {
      alert("Github 로그인이 필요합니다.");
    } else {
      addModal({
        key: "AddPeople",
        props: {},
      });
    }
  };

  const setGradeFilter = () => {
    if (gradeFilter === 3) {
      setGrade(1);
    } else {
      setGrade(gradeFilter + 1);
    }
  };

  const setAllFilter = () => {
    setGrade(0);
  };

  const handleLoadCommitRanks = useCallback(() => {
    const status = useRecoilValueLoadable(commitRank(1));
    switch (status.state) {
      case "hasError":
        return "불러오는 중 에러가 발생했습니다.";
      case "loading":
        return "값을 불러오는 중입니다..";
      case "hasValue":
        return status.contents;
    }
  }, []);

  return <RankView rankList={handleLoadCommitRanks()} filterGrade={gradeFilter} linkToNewTap={linkToNewTap} showAddPersonModal={showRankEnrollModal} setGradeFilter={setGradeFilter} setAllFilter={setAllFilter} />;
};

export default RankContainer;
