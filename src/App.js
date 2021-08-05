import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import HowToPlay from "./Components/HowToPlay";
// import War from "./Components/GameInstructions/War";
// import Memory from "./Components/GameInstructions/Memory";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import GlobalStyles from "./GlobalStyles";
import WarBoard from "./Components/WAR/WarBoard";
function App() {
  return (
    <div>
      <Router>
        <NavBar Home={Home} HowToPlay={HowToPlay} warboard={WarBoard} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/how-to-play" component={HowToPlay} />
          <Route path="/lets-play-war!" component={WarBoard} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
      <GlobalStyles />
    </div>
  );
}

export default App;
