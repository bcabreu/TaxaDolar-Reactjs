import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
  border-bottom: 1px solid var(--green);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 3rem;
  margin: 0 auto;

  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    display: inline-block;
    text-decoration: none;
    padding: 0 1rem;
    color: var(--green);
    cursor: pointer;

    transition: filter 1s;

    &:hover {
      filter: brightness(2);
    }

    &.active {
      filter: brightness(2);
    }
  }

  @media (max-width: 720px) {
    justify-content: center;

    li {
      display: none;
    }
  }

  img {
    width: 12rem;
  }
`;
