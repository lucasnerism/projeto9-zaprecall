import React from "react";
import styled from "styled-components";
import imgplay from "../assets/images/seta_play.png";
import imgturn from "../assets/images/seta_virar.png";
import imgright from "../assets/images/icone_certo.png";
import imgwrong from "../assets/images/icone_erro.png";
import imgalmost from "../assets/images/icone_quase.png";



export default function Flashcards({ numero, question, answer }) {
  const [estado, SetEstado] = React.useState("fechado");


  if (estado === "fechado") {
    return (

      <Cards fechado data-test="flashcard">
        <Container>
          <Texto fechado data-test="flashcard-text">Pergunta {numero}</Texto>
          <Img src={imgplay} />
        </Container>
      </Cards>

    );
  } else if (estado === "aberto") {

  } else if (estado === "virado") {
    return (
      <Cards virado data-test="flashcard">
        <Texto virado data-test="flashcard-text">{answer}</Texto>
        <Container>
          <Button virado color="#FF3030" data-test="no-btn"></Button>
          <Button virado color="#FF922E" data-test="partial-btn"></Button>
          <Button virado color="#2FBE34" data-test="zap-btn"></Button>
        </Container>
      </Cards>
    );
  } else if (estado === "finalizado") {
    return (
      <Cards finalizado data-test="flashcard">
        <Texto finalizado data-test="flashcard-text"></Texto>

      </Cards>
    );
  }
}

const Cards = styled.li`
  width: 300px;
  height: 65px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => (props.aberto || props.virado) ? "#FFFFD4" : "#FFFFFF"};
  display: flex;
  align-items: center ;
  flex-wrap: wrap ;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px;
`;

const ContainerCard = styled.div`

`;

const Texto = styled.h1`
  font-family: 'Recursive', sans-serif;
  font-size: ${props => (props.aberto || props.virado) ? "18px" : "16px"};
  font-weight: ${props => (props.aberto || props.virado) ? "400" : "700"};
  width: ${props => (props.aberto || props.virado) ? "250" : "auto"};
`;

const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 85px;
  height: 37px;
  background-color: ${props => props.color};
  opacity: ${props => props.virado ? "1" : "0"};
`;

const Img = styled.img`
  height: 23px;
`;