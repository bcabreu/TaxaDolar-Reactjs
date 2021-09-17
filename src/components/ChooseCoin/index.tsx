import { Container, Content, Coins } from "./styles";

import USA from "../../assets/bandeiras/USA.svg";
import chooseOption from "../../assets/chooseOption.svg";

export function ChooseCoin() {
  return (
    <Container>
      <Content>
        <header>ESCOLHA A MOEDA PARA CONVERSÃO</header>
        <Coins>
          <img src={USA} alt="Estados Unidos"></img>
          <p>USD</p>
          <img src={chooseOption} alt="Escolher opções"></img>
        </Coins>
        <Coins>
          <img src={USA} alt="Estados Unidos"></img>
          <p>USD</p>
          <img src={chooseOption} alt="Escolher opções"></img>
        </Coins>
      </Content>
    </Container>
  );
}
