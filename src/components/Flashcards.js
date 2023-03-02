import React from "react";
import styled, { css } from "styled-components";
import imgplay from "../assets/images/seta_play.png";
import imgturn from "../assets/images/seta_virar.png";
import imgright from "../assets/images/icone_certo.png";
import imgwrong from "../assets/images/icone_erro.png";
import imgalmost from "../assets/images/icone_quase.png";

export default function Flashcards({ numero, question, answer }) {
  const [estado, setEstado] = React.useState("fechado");
  const [imgFinal, setImgFinal] = React.useState();

  if (estado === "fechado") {
    return (
      <Cards fechado data-test="flashcard">
        <ContainerCard>
          <Texto fechado data-test="flashcard-text">Pergunta {numero}</Texto>
          <Img src={imgplay} onClick={() => setEstado("aberto")} />
        </ContainerCard>
      </Cards>
    );
  } else if (estado === "aberto") {
    return (
      <Cards aberto data-test="flashcard">
        <Texto aberto data-test="flashcard-text">{question}</Texto>
        <Img aberto src={imgturn} alt={"virar"} onClick={() => setEstado("virado")} />
      </Cards>
    );
  } else if (estado === "virado") {
    return (
      <Cards virado data-test="flashcard">
        <Texto virado data-test="flashcard-text">{answer}</Texto>
        <Container>
          <Button virado color="#FF3030" data-test="no-btn" onClick={() => { setEstado("finalizado"); setImgFinal(imgwrong); }}> Não lembrei</Button>
          <Button virado color="#FF922E" data-test="partial-btn" onClick={() => { setEstado("finalizado"); setImgFinal(imgalmost); }}> Quase não lembrei</Button>
          <Button virado color="#2FBE34" data-test="zap-btn" onClick={() => { setEstado("finalizado"); setImgFinal(imgright); }}> Zap!</Button >
        </Container >
      </Cards >
    );
  } else if (estado === "finalizado") {
    return (
      <Cards finalizado data-test="flashcard">
        <ContainerCard>
          <Texto finalizado resultado={imgFinal} data-test="flashcard-text">Pergunta {numero}</Texto>
          <Img src={imgFinal} />
        </ContainerCard>
      </Cards>
    );
  }
}

const Cards = styled.li`
  width: 300px;
  min-height: ${props => (props.aberto || props.virado) ? "131px" : "65px"};
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => (props.aberto || props.virado) ? "#FFFFD4" : "#FFFFFF"};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px;
  position: relative;
`;

const ContainerCard = styled.div`
  width: 270px;
  height: 35px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Texto = styled.h1`
  font-family: 'Recursive';
  font-size: ${props => (props.aberto || props.virado) ? "18px" : "16px"};
  font-weight: ${props => (props.aberto || props.virado) ? "400" : "700"};
  width: ${props => (props.aberto || props.virado) ? "250" : "auto"};
  color: #333333;
  ${props => {
    if (props.resultado === "imgright") {
      return `
      color: #2FBE34;
      text-decoration-line: line-through;
    `;
    }
  }
  }
`;

const Container = styled.div`
  width: 270px;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 15px;
`;

const Button = styled.button`
  width: 85px;
  height: 37px;
  background-color: ${props => props.color};  
  border-radius: 5px; 
  border: none;
  font-family: 'Recursive';  
  font-weight: 400;
  font-size: 12px;
  color: #FFFFFF;
`;

const Img = styled.img`
  height: 23px;
  ${props =>
    props.aberto &&
    `
        height: 20px;
        position: absolute;
        bottom: 6px;
        right: 15px;
    `}
`;

const ImgTurn = styled.img`
  height: 20px;
  position: absolute;
  bottom: 6px;
  right: 15px;
`;
