import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../../styles/Input';
import Button from '../../styles/Button';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
const SuggestionInput = styled(Input)`
  margin-left: 5px;
  font-size: 15px;
  background: #ddd;
`

const SubmitButton = styled(Button)`
  background-color:#7cb342;
  border: 1px solid #7cb342;
  padding: 10px;

  :hover {
    background-color:#4b830d;
  }
`

const ModalContent = ({ suggestion, closeHandler }) => {
  return (
    <Column>
      <Row>
        <span>Name: </span>
        <SuggestionInput />
      </Row>
      <Row>
        <span>Category: </span>
        <SuggestionInput />
      </Row>
      <Row>
        <span>Url: </span>
        <SuggestionInput />
      </Row>
      <SubmitButton onClick={closeHandler}>Submit</SubmitButton>
    </Column>
  );
};

ModalContent.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    url: PropTypes.string,
    votes: PropTypes.number,
    suggestedBy: PropTypes.string
  }),
  closeHandler: PropTypes.func.isRequired
};

ModalContent.defaultProps = {
  suggestion: null
};

export default ModalContent;
