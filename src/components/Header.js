import styled from "styled-components";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <h1>ZapRecall</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 255px;
  display: flex;
  margin: 42px auto 51px;
  justify-content: space-between;
  align-items :center ;
  
  img{
    width: 52px;
  }

  h1{
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    color: #FFFFFF;
    transform: rotate(0.58deg);
  }
`;