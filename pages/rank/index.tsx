import React, { Suspense } from "react";
import { RankContainer } from "../../container";
import ModalPortalContainer from "../../container/ModalPortalContainer";

const Rank: React.FC = () => {
  return (
    <>
      <ModalPortalContainer />
      <RankContainer />
    </>
  );
};

export default Rank;
