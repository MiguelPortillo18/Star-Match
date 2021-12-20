import * as React from 'react';
import { useState } from "react";

import Game from './Game';

// STAR MATCH - V7

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

export function App() {
  return (
    <StarMatch />
  );
}
