import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Row = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
`
const Title = styled.h3`
  margin-bottom: 10px;
`

const Subtitle = styled.h2`
  margin: 5px 0;
`

const Label = styled.label`
  margin: 10px 5px;
`

export default () => {
  return (
    <>
      <Title>Spending more time deciding your next meal than eating it?</Title>
      <Subtitle>Quit dilly dallying and let's get to eating!</Subtitle>
      <Row>
        <Label>Enter Room Code</Label>
        <input/>
        <button>enter</button>
      </Row>
      <Link to='/room'>No Code? Create a room!</Link>
    </>
  )
}