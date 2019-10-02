import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import GenerateRoomCode from '../shared/utils/roomCodeGenerator';
import Button from '../styles/Button';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`
const TitleWrapper = styled.div`
  padding: 10%;
`
const Title = styled.h1`
  text-align: left;
  margin: 5px 0 0 5px;
`

const Subtitle = styled.h1`
  text-align: left;
  margin-top: 60px;
`

const Label = styled.label`
  margin: 0.5em;
  font-size: 25px;
`

const Input = styled.input`
  margin-right: 5px; 
  padding: 0.5em;
  background: #FFF;
  border: none;
  border-radius: 3px;
  font-size: 25px;
  width: 100px;
  text-transform: uppercase;
  text-align: center;
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  // background: #FFF;

  ${props => props.right && css`
    border-left: 2px solid black;
  `}
`

export default () => {
  const [roomCode, setRoomCode] = useState('');
  return (
    <>
      <Panel>
        <TitleWrapper>
          <Title>Spending more time</Title>
          <Title>deciding your next meal</Title>
          <Title>than eating it <span role="img" aria-label="confused">&#129320;</span>?</Title>
          <Subtitle>Quit dilly dallying <span role="img" aria-label="facepalm">&#129318;</span> and let's get to eating!</Subtitle>
        </TitleWrapper>
      </Panel>
      <Panel right>
        <Row>
          <Label>Enter Room Code: </Label>
          <Input
            type="text"
            value={roomCode}
            maxLength="4"
            placeholder="CODE"
            onChange={e => setRoomCode(("" + e.target.value).toUpperCase())}
            />
          <Button as={Link} to={{
            pathname: '/room',
            state: {roomCode}
            }}>ENTER</Button>
        </Row>
        <Button as={Link} to={{
          pathname: '/room',
          state: {
            roomCode: GenerateRoomCode()
          } // create a unique room code
          }}>No Code? Create a room!</Button>
      </Panel>
    </>
  )
}