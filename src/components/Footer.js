import styled from "styled-components";
import party from "../assets/images/party.png";
import sad from "../assets/images/sad.png";
import imgwrong from "../assets/images/icone_erro.png";
import React from "react";

export default function Footer(props) {
  const images = props.images;

  return (
    <Container data-test="footer" deckended={props.finished === props.maxQuestions ? true : false} >

      {props.finished === props.maxQuestions ? (props.images.some(el => el.image === imgwrong) ? <SadEnd /> : <PartyEnd />) : ""}
      <h1>{props.finished}/{props.maxQuestions} CONCLUÍDOS</h1>
      <div>
        {images.map((i, index) => (<Img src={i.image} alt={i.test} datatest={i.test} key={index} />))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: ${props => props.deckended ? "171px" : "70px"};
  background-color: #FFFFFF;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px ;
  position: fixed;
  bottom: 0;
  left: 0;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
  }
  h1{
    font-family: 'Recursive';    
    font-weight: 400;
    font-size: 18px;
    color: #333333;  
    text-align: center ;
  }
  img{
    width: 23px;
    margin-right: 5px;
  }
  strong{
    font-weight: 700;
  }
`;

function SadEnd() {
  return (
    <h1 data-test="finish-text" >
      <div>
        <img src={sad} alt="emoji triste" />
        <strong> Putz...</strong>
      </div>
      <p>Ainda faltam alguns...</p>
      <p>Mas não desanime!</p>
    </h1>
  );
}

function PartyEnd() {
  return (
    <h1 data-test="finish-text" >
      <div>
        <img src={party} alt="emoji de festa" />
        <strong> Parabéns!</strong>
      </div>
      <p>Você não esqueceu de</p>
      <p>nenhum flashcard!</p>
    </h1>
  );
}

function Img(props) {
  return (
    <img src={props.src} alt={props.alt} data-test={props.datatest} />
  );
}