import { format } from "date-fns";
import pt from "date-fns/locale/pt";
import { Container } from "./styles";

export function Dates() {
  const formattedDate = format(new Date(), "eeee', 'dd 'de' MMMM 'de' YYY", {
    locale: pt,
  });

  return <Container>{formattedDate}</Container>;
}
