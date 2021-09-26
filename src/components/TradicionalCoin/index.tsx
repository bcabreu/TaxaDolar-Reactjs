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
import { useEffect } from "react";
import { api } from "../../services/api";

export function TradicionalCoin() {
  const coinsConvert = ["BRL", "USD", "EUR"];
  const coins = [
    "USD",
    "CAD",
    "EUA",
    "GBP",
    "ARS",
    "JPY",
    "CHF",
    "AUD",
    "CNY",
    "ILS",
    "BRL",
  ];

  useEffect(() => {
    api
      .get("USD-BRL")
      .then((response) => console.log(response.data.USDBRL.bid));
  });

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
            </Coins>
          </LineDown>
          <Values>
            <h4>DÓLAR AMERICANO</h4>
            <p>
              US$ <input type="number"></input>
            </p>
          </Values>
        </ContentCoins>

        <ContentCoins>
          <LineDown>
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
                  BRL
                </option>
                <option value="COR">COR</option>
                <option value="SID">SID</option>
              </select>
            </Coins>
          </LineDown>
          <Values>
            <h4>REAL BRASILEIRO</h4>
            <p>
              R$ <input type="number"></input>
            </p>
          </Values>
        </ContentCoins>
      </Content>
    </Container>
  );
}
