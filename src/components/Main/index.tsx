import { TradicionalCoin } from "../TradicionalCoin";
import { Dates } from "../Dates";
import { TypeCoin } from "../TypeCoin";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <TypeCoin />
      <Dates />
      <TradicionalCoin />
    </Container>
  );
}
