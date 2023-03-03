import styled from "styled-components";
import Flashcards from "./Flashcards";
import cards from "./cards";

export default function Deck(props) {

  return (
    <Container>
      {() => props.setMaxQuestions(cards.length)}
      {cards.map((c, index) => (<Flashcards
        key={index}
        question={c.question}
        answer={c.answer}
        numero={index + 1}
        finished={props.finished}
        setFinished={props.setFinished}
      />))}
    </Container>
  );

}



const Container = styled.ul`
  margin-bottom: 70px;

  li{
    margin-bottom: 25px;
  }
`;