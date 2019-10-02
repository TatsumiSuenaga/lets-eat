import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: left;
  border-bottom: 2px solid black;
`
const AppTitle = styled.h1`
  font-family: Mansalva;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 7%;
  text-decoration: none;
  font-size: 2em;
  font-weight: 700;
  
  color: black;
`

export default () => (
  <Header>
    <AppTitle as={Link} to={'/'}>Let's Eat!</AppTitle>
  </Header>
)