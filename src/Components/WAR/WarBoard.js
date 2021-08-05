import { React, useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components/macro";
import BackCard from "./BackCard";
const WarBoard = () => {
  const [oppDeck, setOppDeck] = useState([]);
  const [currPlayerDeck, setCurrPlayerDeck] = useState([]);
  const [shuffDeck, setShuffDeck] = useState([]);
  const [currentlyDrawn, setCurrentlyDrawn] = useState([]);
  const [oppDrawn, setOppDrawn] = useState([]);

  function card(value, name, suit, back) {
    this.value = value;
    this.name = name;
    this.suit = suit;
    this.back = back;
  }

  function deck() {
    let names = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    let suits = ["♠️", "♣️", "♥️", "♦️"];
    let cards = [];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < names.length; j++) {
        cards.push(new card(j + 1, names[j], suits[i], true));
      }
    }
    return cards;
  }
  const clearDrawSections = () => {
    setOppDrawn([]);
    setCurrentlyDrawn([]);
  };
  const shuffleDeck = () => {
    let shuffled = new deck();
    for (let i = shuffled.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * (i + 1));
      let idx = shuffled[randomIdx];
      shuffled[randomIdx] = shuffled[i];
      shuffled[i] = idx;
    }
    setShuffDeck(shuffled);
    // divide deck for 2 players
    let mid = Math.ceil(shuffled.length / 2);
    setOppDeck(shuffled.slice(0, mid));
    setCurrPlayerDeck(shuffled.slice(mid, shuffled.length));
  };
  const resetCardBoolean = () => {
    oppDrawn.forEach((card) => (card.back = false));
    currentlyDrawn.forEach((card) => (card.back = false));
  };
  const drawCard = () => {
    let chosenCard = currPlayerDeck.shift();
    let oppCard = oppDeck.shift();
    setCurrentlyDrawn([chosenCard]);
    setOppDrawn([oppCard]);
    setTimeout(() => {
      if (chosenCard.value > oppCard.value) {
        setCurrPlayerDeck([...currPlayerDeck, ...[chosenCard], ...[oppCard]]);
        clearDrawSections();
      } else if (oppCard.value > chosenCard.value) {
        setOppDeck([...oppDeck, ...[chosenCard], ...[oppCard]]);
        clearDrawSections();
      }
      if (oppCard.value === chosenCard.value) {
        let drawFourOpp = oppDeck.splice(0, 2);
        drawFourOpp[0].back = false;
        let drawFourCur = currPlayerDeck.splice(0, 2);
        drawFourCur[0].back = false;
        setOppDrawn([...[oppCard], ...drawFourOpp]);
        setCurrentlyDrawn([...[chosenCard], ...drawFourCur]);

        // setBoardCards([...oppDrawn, ...currentlyDrawn]);
      }
    }, 2000);
  };
  useEffect(() => {
    shuffleDeck();
  }, []);
  useEffect(() => {
    if (oppDrawn.length > 2 && currentlyDrawn.length > 2) {
      if (
        oppDrawn[oppDrawn.length - 1].value >
        currentlyDrawn[currentlyDrawn.length - 1].value
      ) {
        // resetCardBoolean();
        setOppDeck([...oppDeck, ...oppDrawn, ...currentlyDrawn]);
        setTimeout(clearDrawSections, 2000);
      } else if (
        currentlyDrawn[currentlyDrawn.length - 1].value >
        oppDrawn[oppDrawn.length - 1].value
      ) {
        // resetCardBoolean();
        setCurrPlayerDeck([...currPlayerDeck, ...oppDrawn, ...currentlyDrawn]);
        setTimeout(clearDrawSections, 2000);
      } else {
        let drawFourOpp = oppDeck.splice(0, 2);
        let drawFourCur = currPlayerDeck.splice(0, 2);
        setOppDrawn([...[oppDrawn], ...drawFourOpp]);
        setCurrentlyDrawn([...[currentlyDrawn], ...drawFourCur]);
        let same =
          oppDrawn[oppDrawn.length - 1].value ===
          currentlyDrawn[currentlyDrawn.length - 1].value;
        while (same) {
          let drawFourOpp = oppDeck.splice(0, 2);
          let drawFourCur = currPlayerDeck.splice(0, 2);
          setOppDrawn([...[oppDrawn], ...drawFourOpp]);
          setCurrentlyDrawn([...[currentlyDrawn], ...drawFourCur]);

          if (
            oppDrawn[oppDrawn.length - 1].value >
            currentlyDrawn[currentlyDrawn.length - 1].value
          ) {
            // resetCardBoolean();
            setOppDeck([...oppDeck, ...oppDrawn, ...currentlyDrawn]);
            same = false;
            setTimeout(clearDrawSections, 2000);
          } else if (
            currentlyDrawn[currentlyDrawn.length - 1].value >
            oppDrawn[oppDrawn.length - 1].value
          ) {
            // resetCardBoolean();
            setCurrPlayerDeck([
              ...currPlayerDeck,
              ...oppDrawn,
              ...currentlyDrawn,
            ]);
            same = false;
            setTimeout(clearDrawSections, 4000);
          } else {
            continue;
          }
        }
      }
    }
  }, [oppDrawn, currentlyDrawn]);
  return (
    <GameBoardWrapper>
      <OpponentDeck>
        <BackCard numOfCards={oppDeck.length} />
      </OpponentDeck>
      <DrawnCards>
        <OpponentSide>
          {oppDrawn.map((x, index) => (
            <Card key={index} name={x.name} suit={x.suit} back={x.back} />
          ))}
        </OpponentSide>
        <CurrentPlayerSide>
          {currentlyDrawn.map((x, index) => (
            <Card key={index} name={x.name} suit={x.suit} back={x.back} />
          ))}
        </CurrentPlayerSide>
      </DrawnCards>
      <CurrentPlayerDeck>
        <div style={{ height: "auto" }} onClick={drawCard}>
          <BackCard numOfCards={currPlayerDeck.length} />
        </div>
      </CurrentPlayerDeck>
    </GameBoardWrapper>
  );
};

const GameBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const DrawnCards = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const OpponentSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #79a9cd;
  padding-right: 5px;
`;
const CurrentPlayerSide = styled.div`
  flex: 1;
  display: flex;
  background-color: #ffce47;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
`;
const OpponentDeck = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #79a9cd;
`;
const CurrentPlayerDeck = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffce47;
`;
export default WarBoard;
