import React from "react";
import styled from "styled-components/macro";
const JQK = { K: "🤴🏽", Q: "👸🏽" };
const Card = ({ name, suit, back }) => {
  return (
    <div>
      {back ? (
        <CardOutterLayer>
          <div className="top-left">{name}</div>
          <div className="mid">{JQK[name] ? JQK[name] : suit}</div>
          <div className="bottom-right">{name}</div>
        </CardOutterLayer>
      ) : (
        <CardWrapper>
          <CardPattern />
        </CardWrapper>
      )}
    </div>
  );
};

export default Card;
const CardOutterLayer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 0px solid black; */
  height: 150px;
  width: 100px;
  align-content: center;
  border-radius: 5px;
  justify-content: center;
  user-select: none;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  background-color: whitesmoke;
  div {
    padding: 0px 3px 0px 3px;
  }
  .top-left {
    font-size: 2rem;
    width: 100%;
  }
  .mid {
    align-self: center;
    font-size: 3rem;
    /* width: 100%; */
  }
  .bottom-right {
    align-self: flex-end;
    font-size: 2rem;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 100px;
  align-content: center;
  border-radius: 5px;
  justify-content: center;
  user-select: none;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  background-color: white;
`;
const CardPattern = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: inherit;
  background-color: #e5e5f7;
  opacity: 0.8;

  background-image: linear-gradient(
      30deg,
      #e63946 12%,
      transparent 12.5%,
      transparent 87%,
      #e63946 87.5%,
      #e63946
    ),
    linear-gradient(
      150deg,
      #e63946 12%,
      transparent 12.5%,
      transparent 87%,
      #e63946 87.5%,
      #e63946
    ),
    linear-gradient(
      30deg,
      #e63946 12%,
      transparent 12.5%,
      transparent 87%,
      #e63946 87.5%,
      #e63946
    ),
    linear-gradient(
      150deg,
      #e63946 12%,
      transparent 12.5%,
      transparent 87%,
      #e63946 87.5%,
      #e63946
    ),
    linear-gradient(
      60deg,
      #e6394677 25%,
      transparent 25.5%,
      transparent 75%,
      #e6394677 75%,
      #e6394677
    ),
    linear-gradient(
      60deg,
      #e6394677 25%,
      transparent 25.5%,
      transparent 75%,
      #e6394677 75%,
      #e6394677
    );
  background-size: 20px 35px;
  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
`;
