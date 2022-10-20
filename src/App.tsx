import "./App.css";
import React from "react";
import Keyboard from "./componets/Keyboard/Keyboard";
const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard />
        </div>
      </main>
    </div>
  );
};

export default App;
