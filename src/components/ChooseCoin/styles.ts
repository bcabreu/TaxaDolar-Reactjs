import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  background: var(--shapes);
  margin-top: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.8rem;

  header {
    color: var(--text-title);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const Coins = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0.6rem;
  color: var(--text-title);
  line-height: 2rem;
  margin-top: 2rem;
`;
