import {
  Container,
  Content,
  Coins,
  ContentCoins,
  Values,
  LineDown,
} from "./styles";

// import USA from "../../assets/bandeiras/USA.svg";
import chooseOption from "../../assets/chooseOption.svg";
import { useEffect } from "react";
import { api } from "../../services/api";
import { coinsA, coinsB } from "./coins";

export function TradicionalCoin() {
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
              <select name="coins" background-image={chooseOption}>
                {coinsB.map((coin) => (
                  <option key={coin.id + coin.name}>
                    {coin.id + " - " + coin.name}
                  </option>
                ))}
              </select>
            </Coins>
          </LineDown>
          <Values>
            <p>
              US$ <input type="number"></input>
            </p>
          </Values>
        </ContentCoins>

        <ContentCoins>
          <LineDown>
            <Coins>
              <select
                className="coin2"
                name="coins"
                background-image={chooseOption}
              >
                {coinsA.map((coin) => (
                  <option key={coin.id + coin.name}>
                    {coin.id + " - " + coin.name}
                  </option>
                ))}
              </select>
            </Coins>
          </LineDown>
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
