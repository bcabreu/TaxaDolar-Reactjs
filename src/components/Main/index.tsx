import { ChooseCoin } from "../ChooseCoin";
import { Dates } from "../Dates";
import { TypeCoin } from "../TypeCoin";
import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <TypeCoin />
      <Dates />
      <ChooseCoin />
    </Container>
  );
}
