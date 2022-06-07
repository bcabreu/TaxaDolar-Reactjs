import { Container, Content } from "./styles";
import logoImg from "../../assets/logo-horizontal.svg";

export function Header() {

  const isActive = true

  if(isActive === true) {
    
  }

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="Taxa Dólar" />
          <ul>
            <li className="active">Cotações</li>
            <li>Mercado de Ações</li>
            {/* <li>Blog</li> */}
            <li>Contato</li>
          </ul>
        </Content>
      </Container>
    </>
  );
}
