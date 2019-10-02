import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Suggestion from './Suggestion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
`
const Header = styled.h2`
  text-decoration: underline;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 2em;
`

export default function SuggestionList ({ suggestionList, setList }) {
  const remove = id => {
    let tmp = suggestionList.slice();
    tmp = tmp.filter(suggestion => suggestion.id !== id);
    setList([...tmp]);
  }
  return (
    <Container>
      <Header>Suggestions</Header>
      <List>
        {suggestionList.map((suggestion) => <Suggestion suggestion={suggestion} key={suggestion.id} remove={remove}/>)}
      </List>
    </Container>
  )
}

SuggestionList.propTypes = {
  suggestionList: PropTypes.array.isRequired,
  setList: PropTypes.func.isRequired
}