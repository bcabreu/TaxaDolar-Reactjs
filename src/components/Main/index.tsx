import { TradicionalCoin } from "../TradicionalCoin";
import { Dates } from "../Dates";
import { TypeCoin } from "../TypeCoin";
import { Container } from "./styles";
import { DigitalCoin } from "../DigitalCoin";

export function Main() {
  return (
    <Container>
      <TypeCoin />
      <Dates />
      <TradicionalCoin />
      <DigitalCoin />
    </Container>
  );
}
