import React from "react";
import styled from "styled-components/macro";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import War from "./GameInstructions/War";
import Memory from "./GameInstructions/Memory";
const routes = [
  {
    path: "/how-to-play",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <War />,
  },
  {
    path: "/war",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <War />,
  },
  {
    path: "/memory",
    sidebar: () => <div>MEMZ!</div>,
    main: () => <Memory />,
  },
];
const HowToPlay = () => {
  return (
    <Router>
      <MainWrapper>
        <SideMenuWrapper>
          <ULWrapper>
            <h3>Games</h3>
            <NavLink activeClassName="current" to="/war" exact>
              <li>War</li>
            </NavLink>
            <NavLink activeClassName="current" to="/memory" exact>
              <li>Memory</li>
            </NavLink>
          </ULWrapper>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </SideMenuWrapper>
        <ComponentWrapper>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </ComponentWrapper>
      </MainWrapper>
    </Router>
  );
};

export default HowToPlay;
const MainWrapper = styled.div`
  display: flex;
  /* overflow: hidden; */
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;
const SideMenuWrapper = styled.div`
  padding: 20px;
  width: 20%;
  background: pink;
  overflow: visible;
`;
const ULWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  height: auto;
  text-decoration: none;
  font-size: 0.8rem;
  a {
    text-decoration: none;
  }
  a:hover {
    color: deeppink;
  }
  .current {
    li {
      font-size: 1rem;
      font-weight: 700;
      padding: 5px 0px;
    }
  }
  h3 {
    color: black;
    user-select: none;
    text-align: center;
    font-family: "Staatliches", cursive;
    letter-spacing: 0.1rem;
  }
`;
const ComponentWrapper = styled.div`
  flex: 1;
  padding: 10px;
  background-color: teal;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
