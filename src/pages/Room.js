import React, { useState } from 'react';
import SuggestionRound from './rounds/SuggestionRound';
import EliminationRound from './rounds/EliminationRound';
import Winner from './rounds/Winner';

export default function Room(props) {
  const [round, setRound] = useState('suggestion');
  const roomCode = props.location.state;

  let screen = <p>Welcome to the Room</p>;
  switch(round) {
    case 'suggestion':
      screen = <SuggestionRound selector={setRound} roomCode={roomCode.roomCode}/>;
      break;
    case 'elimination':
      screen = <EliminationRound selector={setRound}/>;
      break;
    case 'winner':
        screen = <Winner selector={setRound}/>;
        break;
    default:
      screen = (
        <div>
          <h1>404 Error</h1>
          <h3>Something is wrong...</h3>
        </div>
      )
  }
  return (
    <>
      {screen}
    </>
  )
}

