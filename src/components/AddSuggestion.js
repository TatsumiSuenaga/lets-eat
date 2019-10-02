import React from 'react';
import styled from 'styled-components';
import { ToggleContent, Modal, ModalContent } from './layouts';
import Button from '../styles/Button';

const AddButton = styled(Button)`
  margin-left: 10px;
  background-color:#7cb342;
  border: 1px solid #7cb342;
  
  :hover {
    background-color:#4b830d;
  }
`

const AddSuggestion = (() => (
  <ToggleContent
    toggleHandler={show => (<AddButton onClick={show}>Add Suggestion</AddButton>)}
    contentHandler={hide => (
      <Modal
        modalType="add"
        closeHandler={hide}
      >
        <ModalContent
          closeHandler={hide}
        />
      </Modal>
    )}
  />
));

export default AddSuggestion;
