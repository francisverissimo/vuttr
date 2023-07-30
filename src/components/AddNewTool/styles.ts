import styled from "styled-components";

export const OverlayForm = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  #formAddNewTool {
    background-color: ${props => props.theme.colorLight};
    padding: 1.6rem;
    height: auto;
    width: 62rem;
    color: ${props => props.theme.mainColor};
    border-radius: 0.5rem;

    #headerForm {
      display: flex;
      justify-content: space-between;

      #closeForm {
        background-color: #ff000022;
        color: #ff0000aa;
        padding: 0.6rem 0.8rem;
        border-radius: 3.2rem;
        cursor: pointer;
        transition: 200ms;

        :hover {
          color: #ff0000;
        }
      }

      h3 {
        margin-bottom: 1.6rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      color: ${props => props.theme.mainColor};
      margin-bottom: 0.5rem;
    }

    input {
      margin-bottom: 1.6rem;
      padding: 0.3rem;
      border-radius: 0.3rem;
      border: none;
      font-size: 2.2rem;
      color: #444;
    }

    textarea {
      margin-bottom: 1rem;
      padding: 0.5rem;
      width: 100%;
      height: 12rem;
      border-radius: 0.7rem;
      border: none;
      font-size: 2rem;
      color: #444;
      resize: none;
    }

    button {
      width: 10rem;
      padding: 1.6rem;
      margin-left: auto;
      background: ${props => props.theme.mainColor}dd;
      color: ${props => props.theme.colorLight};
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 200ms;
      font-weight: 600;

      :hover {
        background: ${props => props.theme.mainColor};
      }
    }
  }
`;
