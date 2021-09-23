import styled from "styled-components";

export const Container = styled.footer`
  background: var(--shapes);
  height: 4rem;
  border-top: 1px solid var(--green);
  border-bottom: 1px solid var(--green);

  position: fixed;
  bottom: 0;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-around;

  @media (min-width: 720px) {
    display: none;
  }
`;

export const Content = styled.div`
  color: var(--text-title);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 0.5px solid var(--green);

  &:last-child {
    border: none;
  }

  a {
    text-align: center;
  }

  p {
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`;
