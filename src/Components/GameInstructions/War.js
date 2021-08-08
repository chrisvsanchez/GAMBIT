import React from "react";
import styled from "styled-components/macro";
import {
  GiCard2Diamonds,
  GiCard3Diamonds,
  GiCard4Diamonds,
  GiCard5Diamonds,
  GiCard6Diamonds,
  GiCard7Diamonds,
  GiCard8Diamonds,
  GiCard9Diamonds,
  GiCardAceDiamonds,
  GiCardJackDiamonds,
  GiCard10Diamonds,
  GiCardQueenDiamonds,
} from "react-icons/gi";
const War = () => {
  return (
    <InstructionWrapper>
      <h1>How to Play War</h1>
      <p>
        War is 2 player card game that is left to complete chance to determine
        who wins! All you need is a 52 deck of traditional playing cards and a
        whole lot of luck!
      </p>
      <div>
        <GiCard2Diamonds />
        <GiCard3Diamonds />
        <GiCard4Diamonds />
        <GiCard5Diamonds />
        <GiCard6Diamonds />
        <GiCard7Diamonds />
        <GiCard8Diamonds />
        <GiCard9Diamonds />
        <GiCard10Diamonds />
        <GiCardAceDiamonds />
        <GiCardJackDiamonds />
        <GiCardQueenDiamonds />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </InstructionWrapper>
  );
};
const InstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 98%;
  h1 {
    height: auto;
  }
  p {
    height: auto;
    font-size: 1rem;
    padding: 10px;
  }
  div {
    display: flex;
    padding: 10px;
    height: auto;
    border: solid 3px chartreuse;
    justify-content: space-evenly;
    align-items: center;
    svg {
      height: auto;
      width: 4rem;
    }
  }
`;
export default War;
