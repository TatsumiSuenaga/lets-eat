import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flow: row;
`
export default () => {

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