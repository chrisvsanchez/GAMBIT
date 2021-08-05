import React from "react";
import styled from "styled-components/macro";
import { GiCardJoker } from "react-icons/gi";
import {
  CgCardSpades,
  CgCardDiamonds,
  CgCardHearts,
  CgCardClubs,
} from "react-icons/cg";
const Home = () => {
  return (
    <HomeWrapper>
      <landingContainer>
        <GiCardJoker size={50} />
        <CgCardClubs size={50} />
        <CgCardSpades size={50} />
        <CgCardDiamonds size={50} />
        <CgCardHearts size={50} />
      </landingContainer>
    </HomeWrapper>
  );
};

export default Home;
const HomeWrapper = styled.div`
  display: flex;
  background-color: palegreen;
  height: 100%;
`;
const landingContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: peachpuff;
`;
