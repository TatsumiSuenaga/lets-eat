import styled from 'styled-components';

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

  :disabled {
    background: #dddddd;
    color: black;
  }
`
export default Button;