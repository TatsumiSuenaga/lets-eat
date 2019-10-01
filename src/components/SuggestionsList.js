import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Suggestion from './Suggestion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export default function SuggestionList ({ suggestionList }) {
  return (
    <Container>
      {suggestionList.map((suggestion) => <Suggestion suggestion={suggestion} key={suggestion.id} />)}
    </Container>
  )
}

SuggestionList.propTypes = {
  suggestionList: PropTypes.array.isRequired,
}