import React, { useReducer } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  width: 100%
`
export default function SuggestionRound ({ selector, roomCode }) {
  
  return (
    <Container>
      {/* Might have to actually do an if/else for elimination and suggestion round, 
        can't think of way of forcing users to exit to next screen*/}
      <h1>ROOM CODE: {roomCode}</h1>
      {/* <PartyList /> wishlist item*/}
      {/* <SuggestionsList /> */}
      {/* <SuggestionModal /> */}
      {/* <EndSuggestionRoung /> */}
    </Container>
  )
}

SuggestionRound.propTypes = {
  selector: PropTypes.func.isRequired,
  roomCode: PropTypes.string.isRequired,
}