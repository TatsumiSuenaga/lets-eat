import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getModalTitle = (type) => {
  let title = null;
  if (type === 'edit') {
    title = 'Edit Suggestion';
  } else if (type === 'add') {
    title = 'Add New Suggestion';
  }
  return title;
};

// styles

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const Main = styled.div`
  position:fixed;
  background: white;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  width: 60%;
`

const TitleBar = styled.ul`
  display: grid;
  grid-template-columns: 1fr repeat(3, auto) 1fr;
  grid-column-gap: 5px;
  justify-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  padding: 15px 0px;
  background: #16b831;
`

const Title = styled.h1`
  margin: 0;
  background-color: transparent; 
  color: $primary-font-color;
  font-weight: 100;
  width: 100%;
  font-size: 1em !important;
  text-align: center;
  letter-spacing: 0.5px;
  margin-top: 4px;
`

const TitleItem = styled.li`
  grid-column-start: 4;
`
const CloseItem = styled.li`
  margin-left: auto;
  padding-right: 5px;
`

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin-right: 3px;
  &:hover{
    color: grey;
  }
  &:active{
    color: grey;
  }
`

const Modal = ({ children, modalType, closeHandler}) => (
  ReactDOM.createPortal(
    <Wrapper>
      <Main>
        <TitleBar>
          <TitleItem>
            <Title>{getModalTitle(modalType)}</Title>
          </TitleItem>
          <CloseItem>
            <IconButton onClick={closeHandler}><i className="material-icons md-36">clear</i></IconButton>
          </CloseItem>
        </TitleBar>
        {children}
      </Main>
    </Wrapper>,
    document.getElementById('modal-root')
  )
);

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  modalType: PropTypes.string.isRequired,
  closeHandler: PropTypes.func.isRequired
};

export default Modal;
