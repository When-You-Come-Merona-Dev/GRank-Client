import React from "react";
import styled from "styled-components";

interface Props {}

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("/background.png");
    span {
      font-size: 25px;
      margin: 15px;
    }
  `,
};
  return (
    <S.Positioner>
    </S.Positioner>
  );
};

export default CodeRedirect;
