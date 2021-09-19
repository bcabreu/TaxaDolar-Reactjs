import {
  Container,
  Content,
  Coins,
  ContentCoins,
  Values,
  LineDown,
} from "./styles";

import USA from "../../assets/bandeiras/USA.svg";
import chooseOption from "../../assets/chooseOption.svg";

export function ChooseCoin() {
  return (
    <Container>
      <header>ESCOLHA A MOEDA PARA CONVERSÃO</header>
      <Content>
        <ContentCoins>
          <LineDown>
            <Coins>
              <img src={USA} alt="Estados Unidos"></img>
              <select name="coins" background-image={chooseOption}>
                <option selected value="USD">
                  USD
                </option>
                <option value="EUA">EUA</option>
                <option value="BRZ">BRZ</option>
                <option value="COR">COR</option>
                <option value="SID">SID</option>
              </select>
              <img src={chooseOption} alt="Escolher opções"></img>
            </Coins>
          </LineDown>
          <Values>
            <h4>DÓLAR AMERICANO</h4>
            <p>
              R$ <span>2000</span>
            </p>
          </Values>
        </ContentCoins>

        <ContentCoins>
          <LineDown>
            <Coins>
              <img src={USA} alt="Estados Unidos"></img>
              <select name="coins" background-image={chooseOption}>
                <option selected value="USD">
                  USD
                </option>
                <option value="EUA">EUA</option>
                <option value="BRZ">BRZ</option>
                <option value="COR">COR</option>
                <option value="SID">SID</option>
              </select>
              <img src={chooseOption} alt="Escolher opções"></img>
            </Coins>
          </LineDown>
          <Values>
            <h4>DÓLAR AMERICANO</h4>
            <p>
              R$ <span>2000</span>
            </p>
          </Values>
        </ContentCoins>
      </Content>
    </Container>
  );
}
