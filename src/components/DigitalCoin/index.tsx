import { Container, Content, Coins, ContentCoins, Values } from "./styles";

import USA from "../../assets/bandeiras/USA.svg";
import chooseOption from "../../assets/chooseOption.svg";

export function DigitalCoin() {
  return (
    <Container>
      <header>MOEDAS DIGITAIS</header>
      <Content>
        <ContentCoins>
          <Coins>
            <img src={USA} alt="Estados Unidos"></img>
            <select name="coins" background-image={chooseOption}>
              <option selected value="BITCOIN">
                BITCOIN
              </option>
              <option value="EUA">EUA</option>
              <option value="BRZ">BRZ</option>
              <option value="COR">COR</option>
              <option value="SID">SID</option>
            </select>
          </Coins>

          <Values>
            <p>
              US$ <input type="number" />
            </p>
          </Values>
        </ContentCoins>

        <ContentCoins>
          <Coins>
            <img src={USA} alt="Estados Unidos"></img>
            <select
              className="coin2"
              name="coins"
              background-image={chooseOption}
            >
              <option value="USD">USD</option>
              <option value="EUA">EUA</option>
              <option selected value="BRL">
                REAL
              </option>
              <option value="COR">COR</option>
              <option value="SID">SID</option>
            </select>
          </Coins>

          <Values>
            <p>
              R$ <input type="number"></input>
            </p>
          </Values>
        </ContentCoins>
      </Content>
    </Container>
  );
}
