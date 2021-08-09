import React from "react";
import styled from "styled-components/macro";
import {
  GiCard2Spades,
  GiCard3Spades,
  GiCard4Spades,
  GiCard5Spades,
  GiCard6Spades,
  GiCard7Spades,
  GiCard8Spades,
  GiCard9Spades,
  GiCardAceSpades,
  GiCardJackSpades,
  GiCard10Spades,
  GiCardQueenSpades,
} from "react-icons/gi";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
const War = () => {
  return (
    <InstructionWrapper>
      <h1>How to Play War</h1>
      <p>
        War is a 2 player card game uses chance to determine who wins! All you
        need is a 52 deck of traditional playing cards and a whole lot of luck
        to get started!
      </p>
      <div style={{ backgroundColor: "black" }}>
        <h3>Lowest</h3>
        <ImArrowRight className={"arrows"} />
        <GiCard2Spades />
        <GiCard3Spades />
        <GiCard4Spades />
        <GiCard5Spades />
        <GiCard6Spades />
        <GiCard7Spades />
        <GiCard8Spades />
        <GiCard9Spades />
        <GiCard10Spades />
        <GiCardAceSpades />
        <GiCardJackSpades />
        <GiCardQueenSpades />
        <ImArrowLeft className={"arrows"} />
        <h3>Highest</h3>
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
  padding: 25px;
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
      color: white;
      /* background-color: red; */
    }
    .arrows {
      width: 1.5rem;
      color: black;
      background-color: transparent;
      color: white;
      padding: 0 5px;
    }
    h3 {
      height: auto;
      color: white;
    }
  }
`;
export default War;
