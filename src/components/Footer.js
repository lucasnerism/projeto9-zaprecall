import styled from "styled-components";

export default function Footer() {
  return (
    <Container data-test="footer">
      <h1>0/4 CONCLUÍDOS</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  h1{
    font-family: 'Recursive';    
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }
`;