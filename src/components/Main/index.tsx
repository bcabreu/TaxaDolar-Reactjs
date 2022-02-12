import { TradicionalCoin } from "../TradicionalCoin";
import { Dates } from "../Dates";
import { Container, Title } from "./styles";
import { DigitalCoin } from "../DigitalCoin";

export function Main() {
  return (
    <Container>
      <Title>cotação do dia</Title>
      <Dates />
      <TradicionalCoin />
      <DigitalCoin />
    </Container>
  );
}
