import React from "react";
import Home from "./views/Home";
import lrgLogo from './assets/bodytracker-nobkg.png';

function App() {
  return (
    <div className="App">
      <div>
        <img
          src={lrgLogo}
          width="300"
        />
      </div>
      <Home />
    </div>
  );
}

export default App;
