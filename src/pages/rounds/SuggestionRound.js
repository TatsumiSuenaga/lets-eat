import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SuggestionList from '../../components/SuggestionList';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%
`
export default function SuggestionRound ({ selector, roomCode }) {
  const [suggestionList, setSuggestionList] = useState([
    {
      id: '1234',
      name: 'Ramen',
      url: 'http://ramen.com/',
      votes: '0',
      category: 'Food',
      suggestedBy: 'user'
    },
    {
      id: '5678',
      name: 'McDonalds',
      url: 'http://mcdonalds.com/',
      votes: '0',
      category: 'Restaurant',
      suggestedBy: 'user'
    },
    {
      id: '9999',
      name: 'Italian',
      url: '',
      votes: '0',
      category: 'Cuisine',
      suggestedBy: 'user'
    },
  ])
  return (
    <Container>
      {/* Might have to actually do an if/else for elimination and suggestion round, 
        can't think of way of forcing users to exit to next screen*/}
      <h1>ROOM CODE: {roomCode}</h1>
      {/* <PartyList /> wishlist item*/}
      <SuggestionList suggestionList={suggestionList}/> 
      {/* <SuggestionModal /> */}
      {/* <EndSuggestionRound /> */}
    </Container>
  )
}

SuggestionRound.propTypes = {
  selector: PropTypes.func.isRequired,
  roomCode: PropTypes.string.isRequired,
}