import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`

`

export default function Suggestion({ suggestion }) {
  return (
    <ListItem>{suggestion.name}</ListItem>
  )
}

Suggestion.propTypes = {
  suggestion: PropTypes.object.isRequired,
}