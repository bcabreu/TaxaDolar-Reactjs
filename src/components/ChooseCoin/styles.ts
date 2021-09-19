import styled from "styled-components";

export const Container = styled.div`
  header {
    color: var(--text-title);
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: 1.2rem;
  }
`;

export const Content = styled.div`
  background: var(--shapes);
  margin-top: 0.2rem;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`;

export const Coins = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0.6rem;
  color: var(--text-title);
  line-height: 2rem;

  select {
    outline: none;
    background: var(--shapes);
    border: none;
    color: var(--text-title);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export const ContentCoins = styled.div`
  &:first-child {
    border-right: 1px solid var(--green);
  }

  color: var(--text-title);
`;

export const Values = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--text-title);
  line-height: 2rem;
  padding-top: 0.2rem;

  h4 {
    font-size: 0.75rem;
  }

  p {
    font-size: 0.875rem;

    span {
      font-size: 1.625rem;
    }
  }
`;

export const LineDown = styled.div`
  border-bottom: 1px solid var(--green);
  padding-bottom: 1rem;
`;
