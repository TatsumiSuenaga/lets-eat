import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../styles/Button';

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`
const RemoveButton = styled(Button)`
  min-width: 0px;
  background-color: #d32f2f;
  border: 1px solid #d32f2f;
  vertical-align: center;
	padding: 4px 8px;
  
  :hover {
    background-color: #9a0007;
  }
`
export default function Suggestion({ suggestion }) {
  return (
    <ListItem>
      {suggestion.name}
      <RemoveButton><i className="material-icons">clear</i></RemoveButton>
    </ListItem>
  )
}

Suggestion.propTypes = {
  suggestion: PropTypes.object.isRequired,
}