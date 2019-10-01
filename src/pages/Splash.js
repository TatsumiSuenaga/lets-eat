import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import GenerateRoomCode from '../shared/utils/roomCodeGenerator';

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

const Button = styled.button`
  min-width: 50px;
  background-color:#ec4079;
	-moz-border-radius:10px;
  -webkit-border-radius:10px;
  border: 1px solid #ec4079;
	border-radius:10px;
	cursor:pointer;
	color:#ffffff;
	font-size: 20px;
	padding:16px 31px;
	text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
  
  :hover {
    background-color:#b4004e;
  }

  :active {
    position:relative;
	  top:1px;
  }
`

export default () => {
  const [roomCode, setRoomCode] = useState(GenerateRoomCode());

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
            onChange={e => setRoomCode(e.target.value)}
            />
          <Button as={Link} to={{
            pathname: '/room',
            state: {roomCode}
            }}>ENTER</Button>
        </Row>
        <Button as={Link} to={{
          pathname: '/room',
          state: {roomCode} // create a unique room code
          }}>No Code? Create a room!</Button>
      </Panel>
    </>
  )
}