import styled from "styled-components";

import chooseOption from "../../../src/assets/chooseOption.svg";

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
    background: var(--shapes) url(${chooseOption}) no-repeat;
    border: none;
    color: var(--text-title);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-position: 95% center;
    width: 100%;
    padding-left: 0.4rem;
    text-align: center;

    option {
      padding: 1rem 0;
    }
  }
`;

export const ContentCoins = styled.div`
  &:first-child {
    border-right: 1px solid var(--green);
  }
  overflow: hidden;
  color: var(--text-title);
`;

export const Values = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.4rem;
  color: var(--text-title);
  line-height: 2rem;
  padding-top: 0.2rem;

  h4 {
    font-size: 0.75rem;
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;

    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input[type="number"] {
      font-size: 1.6rem;
      border: none;
      color: var(--text-title);
      background: var(--shapes);
      text-align: center;
      width: 75%;
      outline: none;
    }
  }
`;

export const LineDown = styled.div`
  border-bottom: 1px solid var(--green);
  padding-bottom: 1rem;
`;
