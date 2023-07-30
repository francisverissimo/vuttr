import styled from "styled-components";

/** Header */
export const SectionHeader = styled.section`
  background: ${(props) => props.theme.mainColorDark};

  header {
    max-width: 65rem;
    margin-inline: auto;
    padding: 3.2rem 1.6rem;
    color: ${(props) => props.theme.colorLight};

    h1 {
      margin-bottom: 2rem;
    }
  }
`;

/** Main */
export const Main = styled.main`
  max-width: 65rem;
  width: 100%;
  padding-inline: 1.6rem;
  margin-inline: auto;
  margin-bottom: auto;

  #sectionTools {
    padding-block: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

/** SubHeader */
export const SubHeader = styled.section`
  padding-block: 1.6rem;
  align-items: center;
`;

export const SearchInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    color: ${(props) => props.theme.mainColorDark};
    font-size: 2.2rem;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.mainColor};
    height: 3.2rem;
    background-color: transparent;
    max-width: 32rem;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  color: #444;
`;

export const ButtonOpenModalForm = styled.button`
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.colorLight};
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: 200ms;
  width: fit-content;
  text-transform: uppercase;
  box-shadow: 3px 3px 7px #00000055;
  margin-left: auto;

  :hover {
    background-color: ${(props) => props.theme.mainColorDark};
  }
`;

export const Footer = styled.div`
  padding: 3.2rem 1.6rem;
  max-width: 65rem;
  margin-inline: auto;

  section {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    p {
      text-align: center;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${(props) => props.theme.mainColor};
      font-weight: 600;
      font-size: 1.4rem;
    }

    a {
      color: #555;
      text-decoration: none;
      align-self: center;
      font-size: 1.4rem;

      :hover {
        color: ${(props) => props.theme.mainColor};
      }
    }
  }
`;
