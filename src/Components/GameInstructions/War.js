import React from "react";
import styled from "styled-components/macro";
import firstDraw from "../Images/FirstDraw.png";
import match from "../Images/Match.png";
import match2 from "../Images/Match2.png";
import splitDeck from "../Images/SplitDeck.png";
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
      <p>
        Below you'll see cards that are ordered from lowest value to highest.
        Regardless of suit(♦️,♣️,♠️,♥️)
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

      <OrderedListWrapper type="1">
        <li>
          Shuffle the deck of 52 cards and split for two players, each gets a
          deck of 26 cards
          <ImageContainer>
            <img alt="split Deck" src={splitDeck}></img>
          </ImageContainer>
        </li>
        <li>
          Each Player turns up a card at the same time at the center between
          both decks, whoever places the card with the higher value adds the
          both cards to the bottom of the deck{" "}
          <ImageContainer>
            <img alt="split Deck" src={firstDraw}></img>
          </ImageContainer>
        </li>
        <li>
          If both players place a card with the same value that's called WAR,
          Each player draws one card and place facedown and another card face
          up, once again, the highest card keeps all of them and adds to the
          bottom of their respective decks. However, if both cards match again,
          then you continue until a player has a higher card{" "}
          <ImageContainer>
            <img alt="split Deck" src={match}></img>
            <img alt="split Deck" src={match2}></img>
          </ImageContainer>
        </li>
        <li>
          How do you know if you won?
          <ul>
            <li>
              If a player obtains all 52 cards, that player is the winner!
            </li>
            <li>
              If one of the players run out of cards during WAR, the opponent
              wins.
            </li>
          </ul>
        </li>
      </OrderedListWrapper>
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
const OrderedListWrapper = styled.ol`
  height: auto;
  li {
    height: auto;
    font-size: 1.2rem;
    padding: 20px;
  }
`;
const ImageContainer = styled.div`
  flex: 1 1 150px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  img {
    flex: 1;
    width: 300px;
    max-width: 300px;
    height: auto;
    box-shadow: black;
    box-shadow: 0 4px 10px rgb(0 0 0 / 0.5);
  }
`;
export default War;
