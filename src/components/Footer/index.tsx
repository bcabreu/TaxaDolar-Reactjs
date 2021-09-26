import { Container, Content } from "./styles";
import quoteImg from "../../../src/assets/quote.svg";
import marketImg from "../../../src/assets/market.svg";
// import blogImg from "../../../src/assets/blog.svg";
import contactImg from "../../../src/assets/contact.svg";
import shareImg from "../../../src/assets/share.svg";

export function Footer() {
  return (
    <>
      <Container>
        <Content>
          <a href="http://localhost:3000">
            <img src={quoteImg} alt="Cotações" />
            <p>COTAÇÕES</p>
          </a>
        </Content>

        <Content>
          <a href="http://localhost:3000">
            <img src={marketImg} alt="Cotações" />
            <p>BOLSA DE VALORES</p>
          </a>
        </Content>

        {/* <Content>
          <a href="http://localhost:3000">
            <img src={blogImg} alt="Cotações" />
            <p>BLOG</p>
          </a>
        </Content> */}

        <Content>
          <a href="http://localhost:3000">
            <img src={contactImg} alt="Cotações" />
            <p>CONTATO</p>
          </a>
        </Content>

        <Content>
          <a href="http://localhost:3000">
            <img src={shareImg} alt="Cotações" />
            <p>SHARE</p>
          </a>
        </Content>
      </Container>
    </>
  );
}
