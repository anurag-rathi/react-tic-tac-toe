import React from 'react';

//importing Board Component and use it in Game.js
import Board from "./Board";

//creating simple class component 
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      );
    }
  }

export default Game;  
