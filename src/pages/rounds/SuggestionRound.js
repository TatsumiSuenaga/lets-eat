import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-flow: row;
`
export default function SuggestionRoud ({ selector }) {

  return (
    <Container>
      {/* Might have to actually do an if/else for elimination and suggestion round, 
        can't think of way of forcing users to exit to next screen*/}
      <h1>Suggest some places to go to eat!</h1>
      {/* <SuggestionsList /> */}
      {/* <SuggestionModal /> */}
    </Container>
  )
}

SuggestionRoud.propTypes = {
  selector: PropTypes.func.isRequired,
}