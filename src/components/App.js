import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Splash from '../pages/Splash';
import Room from '../pages/Room';

const Container = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  margin: 0 auto;
  text-align: center;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
  width: 100%;
`
function App() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path='/' component={Splash}/>
          <Route exact path='/room' component={Room}/>
        </Switch>
      </Wrapper>
    </Container>
  );
}

export default App;
