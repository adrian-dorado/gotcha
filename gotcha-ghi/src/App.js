import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { CardComponent } from './card/CardComponent.js';
import { Header } from './helpers/Header.js';
import { StartGame } from './helpers/StartGame.js';
import { HowToPlay } from './helpers/HowToPlay.js';
// import { Card } from './card/Card.js';

export default function App() {

  const [startGame, setStartGame] = useState(false);
  const gameStartCheck = () => {
    setStartGame(prev => !prev);
    console.log({ 'Current Game State': startGame });
  }


  return (
    <div>
      <Header />
      {startGame == false ? (
        <>
          <StartGame onClick={gameStartCheck} />
          <HowToPlay />
        </>
      ) : (
        <CardComponent />
      )}
      <BrowserRouter>
      </BrowserRouter>
    </div>
  );
}
