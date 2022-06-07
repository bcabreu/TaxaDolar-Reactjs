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
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { fromCurrency, toCurrency  } from "./coins";

export function TradicionalCoin() {
const [currencyOptions, setCurrencyOptions] = useState(['USD'])
const [coinsConverted, setCoinsConverted] = useState(['BRL'])
const [exchangeRate, setExchangeRate] = useState()
const [amount, setAmount] = useState(1)
const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

const onChangeCurrency = (event: any) => {setCurrencyOptions(event.target.value)}
const onChangeCurrencyConvert = (event: any) => {setCoinsConverted(event.target.value)}

const handleToAmount = (event:any) => {
  setAmount(event.target.value)
  setAmountInFromCurrency(true)
}

const handleFromAmount = (event:any) => {
  setAmount(event.target.value)
  setAmountInFromCurrency(false)
}

let toAmount, fromAmount

if(amountInFromCurrency) {
  fromAmount = amount
  toAmount = amount * Number(exchangeRate)
} else {
  toAmount = amount
  fromAmount = amount / Number(exchangeRate)
}

  useEffect(() => {
    if(currencyOptions !== coinsConverted && fromCurrency !== undefined && toCurrency!== undefined  ) {
      api
      .get(`${currencyOptions}-${coinsConverted}`)  
      .then((response) => {
        const firstCurrency = Object.keys(response.data)[0]
        setExchangeRate(response.data[firstCurrency].bid)
      })
    } else {
      alert("As moedas não podem ser a mesmas, favor escolher uma moeda diferente!")
    }
  }, [currencyOptions, coinsConverted]);

  return (
    <Container>
      <header>ESCOLHA A MOEDA PARA CONVERSÃO</header>
      <Content>
        <ContentCoins>
          <LineDown>
            <Coins>
              <select value={currencyOptions} onChange={onChangeCurrency} name="coins" background-image={chooseOption}>
                {fromCurrency.map((option) => (
                  <option value={option.id} key={option.id}>{option.id} - {option.name}</option>
                ))}
              </select>
            </Coins>
          </LineDown>
          <Values>
            <p>
              <input type="number" value={fromAmount} onChange={handleToAmount} />
            </p>
            <span>
            {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: `${currencyOptions}`
                }).format(fromAmount)}
            </span>
          </Values>
        </ContentCoins>

        <ContentCoins>
          <LineDown>
            <Coins>
              <select
                value={coinsConverted}
                onChange={onChangeCurrencyConvert}
                name="coins"
                background-image={chooseOption}
              >
                {toCurrency.map((option) => (
                  <option value={option.id} key={option.id}>{option.id} - {option.name}</option>
                ))}
              </select>
            </Coins>
          </LineDown>
          <Values>
            <p>
              <input type="number" value={toAmount} onChange={handleFromAmount}/>
            </p>
            <span>
            {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: `${coinsConverted}`
              }).format(toAmount)}
            </span>
          </Values>
        </ContentCoins>
      </Content>
    </Container>
  );
}
