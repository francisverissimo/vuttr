import styled from "styled-components";

/** Header */
export const SectionHeader = styled.section`
  background: ${(props) => props.theme.mainColorDark};

  header {
    max-width: 65rem;
    margin-inline: auto;
    padding: 1.6rem;
    color: ${(props) => props.theme.colorLight};

    h1 {
      margin-bottom: 2rem;
    }
  }
`;

/** Main */
export const Main = styled.main`
  max-width: 65rem;
  padding-inline: 1.6rem;
  margin-inline: auto;

  #sectionTools {
    padding-block: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
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
  max-width: 32rem;

  input {
    color: ${(props) => props.theme.mainColorDark};
    font-size: 2.2rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.3rem;
    height: 3.2rem;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  color: #333;

  input {
    margin-right: 1rem;
    width: 1.75rem;
  }
`;

export const ButtonOpenModalForm = styled.button`
  background: ${(props) => props.theme.mainColorLight};
  color: ${(props) => props.theme.colorLight};
  border: none;
  cursor: pointer;
  font-size: 2.2rem;
  padding-block: 0.5rem;
  border-radius: 0.3rem;
  transition: 200ms;

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
      color: ${(props) => props.theme.mainColorLight};

      :first-child {
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
    }

    a {
      color: #555;
      text-decoration: none;
      align-self: flex-end;

      :hover {
        color: ${(props) => props.theme.mainColor};
        color: #00aa00;
      }
    }
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid #bbb;
`;
