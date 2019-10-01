import React from 'react';
import styled from 'styled-components';

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
`

export default () => (
  <Header>
    <AppTitle>Let's Eat!</AppTitle>
  </Header>
)