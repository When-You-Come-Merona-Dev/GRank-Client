import styled from "styled-components"

export const ModalOverlay = styled.div`
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