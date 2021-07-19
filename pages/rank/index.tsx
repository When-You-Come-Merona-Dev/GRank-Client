import React, { Suspense } from "react";
import { RankContainer, HeaderContainer } from "../../container";
import ModalPortalContainer from "../../container/ModalPortalContainer";

const Rank: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <ModalPortalContainer />
      <RankContainer />
    </>
  );
};

export default Rank;
