import styled from "styled-components";

/** Header */
export const SectionHeader = styled.section`
  background: #1d5c63;
  padding-right: 1rem;
  padding-bottom: 1rem;

  header {
    max-width: 65rem;
    margin-left: auto;
    margin-right: auto;
    padding: 5rem 1rem 2rem;
    color: #ede6db;
    text-shadow: 0.4rem 0.4rem 0.5rem #1a3c40, -0.4rem -0.4rem 0.5rem #1a3c40;

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
`;

/** SubHeader */
export const SubHeader = styled.section`
  padding: 1rem;
  align-items: center;
  position: relative;
`;

export const ButtonOpenModalForm = styled.button`
  background: #ede6db;
  color: #54e346bb;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 10rem;
  position: absolute;
  right: 2rem;
  top: -2rem;
  font-size: 4rem;
  transition: 0.2s;

  :hover {
    color: #54e346;
  }
`;

export const SearchInputs = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: none;
    border-radius: 1rem;
    height: 2.5rem;
    padding: 1rem;
    font-size: 2rem;
    color: #333;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  margin-bottom: 0.5rem;
  color: #333;

  input {
    margin-right: 1rem;
    width: 1.75rem;
  }
`;
