import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { DealtHand } from './card/DealtHand.js';
import { Header } from './helpers/Header.js';
import { GameButtons } from './helpers/GameButtons.js';
// import { Card } from './card/Card.js';

export default function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const gameStartCheck = () => {
    setIsGameStarted(prev => !prev);
  }

  const renderGame = () => {
    return isGameStarted ? <DealtHand /> : <GameButtons onClick={gameStartCheck} />;
  };

  return (
    <BrowserRouter>
      <Header />
      {renderGame()}
    </BrowserRouter>
  );
}
