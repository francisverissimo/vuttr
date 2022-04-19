import styled from "styled-components";

/** Header */
export const SectionHeader = styled.section`
  background: #1d5c63;

  header {
    max-width: 65rem;
    margin-left: auto;
    margin-right: auto;
    padding: 5rem 1rem 2rem;
    color: #ede6db;
    text-shadow: 0.4rem 0.4rem 0.5rem #1a3c40,
      -0.4rem -0.4rem 0.5rem #1a3c40;

    h1 {
      margin-bottom: 1rem;
    }
  }
`;

/** Main */
export const Main = styled.main`
  max-width: 65rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
`;

/** SubHeader */
export const SubHeader = styled.section`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    * {
      margin-right: 0.8rem;
    }
  }

  button {
    background: transparent;
    border: 0.1rem solid black;
    font-weight: 700;
    cursor: pointer;
    padding: 0 0.3rem;

    &:hover {
      font-size: 1.5rem;
    }
  }
`;
