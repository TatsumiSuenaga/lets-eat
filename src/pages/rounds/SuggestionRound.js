import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SuggestionList from '../../components/SuggestionList';
import { ELIMINATION_ROUND } from '../../shared/constants';
import Button from '../../styles/Button';
import AddSuggestion from '../../components/AddSuggestion';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%
`
const ButtonPanel = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`

export default function SuggestionRound ({ selector, roomCode }) {
  const [suggestionList, setSuggestionList] = useState([
    {
      id: '1234',
      name: 'Ramen',
      url: 'http://ramen.com/',
      votes: 0,
      category: 'Food',
      suggestedBy: 'user'
    },
    {
      id: '5678',
      name: 'McDonalds',
      url: 'http://mcdonalds.com/',
      votes: 0,
      category: 'Restaurant',
      suggestedBy: 'user'
    },
    {
      id: '9999',
      name: 'Italian',
      url: '',
      votes: 0,
      category: 'Cuisine',
      suggestedBy: 'user'
    },
  ])
  const remove = id => {
    let tmp = suggestionList.slice();
    tmp = tmp.filter(suggestion => suggestion.id !== id);
    setSuggestionList([...tmp]);
  }
  return (
    <Container>
      {/* Might have to actually do an if/else for elimination and suggestion round, 
        can't think of way of forcing users to exit to next screen*/}
      <h1>ROOM CODE: {roomCode}</h1>
      {/* <PartyList /> wishlist item*/}
      <SuggestionList suggestionList={suggestionList} remove={remove}/> 
      <ButtonPanel>
        { suggestionList && suggestionList.length > 0 ? 
          <Button onClick={() => selector(ELIMINATION_ROUND)}>Let's Choose!</Button>
          : <Button disabled="disabled">Let's Choose!</Button>
        }
        <AddSuggestion>Add Suggestion</AddSuggestion>
      </ButtonPanel>
    </Container>
  )
}

SuggestionRound.propTypes = {
  selector: PropTypes.func.isRequired,
  roomCode: PropTypes.string.isRequired,
}