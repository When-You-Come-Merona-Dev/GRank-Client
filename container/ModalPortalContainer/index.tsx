import React from "react";

import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { modalState } from "../../model/ModalModel/atoms";
import AddPersonModalContainer from "../AddPersonModalContainer";
import AdminApplyContainer from "../AdminApplyContainer";

const ModalPortalContainer: React.FC = () => {
  const modalList = useRecoilValue(modalState);
  return (
    <>
      {modalList.map(({ key, props }, index) => {
        if (key === "AddPeople") {
          return (
            <>
              <ModalOverlay />
              <AddPersonModalContainer {...props} key={key + index} />
            </>
          );
        }
        if (key === "AdminLink") {
          return (
            <>
              <ModalOverlay />
              <AdminApplyContainer {...props} key={key + index} />
            </>
          );
        }
      })}
    </>
  );
};

export default ModalPortalContainer;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;
