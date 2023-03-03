import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

export default function Welcome() {
  const [initiate, setInitiate] = React.useState(false);

  return (
    <StartScreen initiate={initiate}>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
      <button data-test="start-btn" onClick={() => setInitiate(true)} >
        Iniciar Recall!
      </button>
    </StartScreen>
  );
}

const StartScreen = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => props.initiate ? "none" : "flex"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: #FB6B6B;

  img{
    width: 136px;
    margin-bottom: 13px;
  }

  h1{
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    text-align: center;
    color: #FFFFFF;
  }

  button{
    margin-top: 30px;
    width:246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #D70900;
  }  
`;