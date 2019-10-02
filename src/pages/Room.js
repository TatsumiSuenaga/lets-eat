import React, { useState } from 'react';
import SuggestionRound from './rounds/SuggestionRound';
import EliminationRound from './rounds/EliminationRound';
import Winner from './rounds/Winner';
import { SUGGESTION_ROUND, ELIMINATION_ROUND, WINNER_ROUND } from '../shared/constants';

export default function Room(props) {
  const [round, setRound] = useState(SUGGESTION_ROUND);
  const roomCode = props.location.state;

  let screen = <p>Welcome to the Room</p>;
  switch(round) {
    case SUGGESTION_ROUND:
      screen = <SuggestionRound selector={setRound} roomCode={roomCode.roomCode}/>;
      break;
    case ELIMINATION_ROUND:
      screen = <EliminationRound selector={setRound}/>;
      break;
    case WINNER_ROUND:
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

