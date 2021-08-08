import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { GiSpadeSkull } from "react-icons/gi";
const NavBar = ({ Home, HowToPlay, WarBoard }) => {
  return (
    <Wrapper>
      <ULWrapper>
        <AppTitle>
          <NavLink to="/" exact>
            {/* <li> */}
            GAMBIT
            <GiSpadeSkull size={"1rem"} />
            {/* </li> */}
          </NavLink>
        </AppTitle>

        <NavLink to="/" activeClassName="current" exact>
          <li>Home</li>
        </NavLink>
        <NavLink to="/how-to-play" activeClassName="current" exact>
          <li>How to Play</li>
        </NavLink>
        <NavLink to="/lets-play-war!" activeClassName="current" exact>
          <li>Let's Play</li>
        </NavLink>
        {/* <NavLink to="/login" activeClassName="current" exact>
          <li>Login</li>
        </NavLink> */}
      </ULWrapper>
    </Wrapper>
  );
};

export default NavBar;
const Wrapper = styled.div`
  /* flex: 1 1 50px; */
  display: flex;
  width: 100%;
  /* justify-content: space-between; */
  /* align-items: center; */
  height: 8%;
  /* background-color: lavender; */
  /* border: solid 5px black; */
`;
const ULWrapper = styled.ul`
  /* height: 50px; */
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: solid green 4px; */
  background-color: #f5f5e0;
  /* background-color: #0093e9; */
  height: auto;
  width: inherit;
  padding: 10px;

  /* border: solid black 5px; */
  a {
    text-decoration: none;
    height: auto;
    /* padding: 10px; */
    color: black;
    &:hover {
      color: deeppink;
    }
  }

  li {
    color: black;
    margin: 0 0.08rem;
    font-size: 1rem;
    list-style: none;
    height: auto;
    &:hover {
      color: deeppink;
    }
  }
  .current {
    li {
      border-bottom: 2px solid black;
      font-weight: 600;
    }
  }
`;
const AppTitle = styled.h1`
  color: black;
  font-family: "Staatliches", cursive;
  /* padding: 0 00px 0 0; */
  align-self: flex-start;
  height: auto;
`;
