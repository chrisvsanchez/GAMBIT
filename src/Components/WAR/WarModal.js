import React from "react";
import styled from "styled-components/macro";

const WarModal = () => {
  return (
    <ModalWrapper>
      <Text>WAR!</Text>
    </ModalWrapper>
  );
};

export default WarModal;
const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;

  background-color: rgba(4, 4, 4, 0.591);
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  z-index: 1;
  span {
    height: auto;
  }
`;
const Text = styled.h1`
  font-family: "Staatliches", Cambria, Cochin, Georgia, Times, "Times New Roman";
  height: auto;
  font-size: 7rem;
`;
