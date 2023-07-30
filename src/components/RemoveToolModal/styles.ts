import styled from "styled-components";

export const OverlayModal = styled.div`
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

  #modal {
    background: ${(props) => props.theme.colorLight};
    padding: 2rem;
    height: auto;
    width: 62rem;
    color: ${(props) => props.theme.mainColor};
    border-radius: 1rem;

    #closeForm {
      background-color: #ff000022;
      padding: 0.6rem 0.8rem;
      border-radius: 3.2rem;
      width: fit-content;
      margin-left: auto;
      text-align: right;
      color: #ff0000bb;
      cursor: pointer;
      transition: 100ms;

      :hover {
        color: #ff0000;
      }
    }

    p {
      font-weight: 500;
      font-size: 2rem;
      text-align: center;
      margin: 1rem;
      padding-bottom: 3rem;

      span {
        font-weight: 700;
        font-size: 2.35rem;
      }
    }

    .buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.2rem;

      #cancelButton {
        background: ${(props) => props.theme.colorLight};
        color: ${(props) => props.theme.mainColor}dd;
        font-size: 1.6rem;
        padding: 1rem;
        border: solid 0.2rem ${(props) => props.theme.mainColor};
        border-radius: 0.3rem;
        cursor: pointer;
        transition: 200ms;
        font-weight: bold;

        :hover {
          background: ${(props) => props.theme.colorLight}22;
        }
      }

      #removeButton {
        background: #ff0000dd;
        color: ${(props) => props.theme.colorLight};
        font-size: 1.6rem;
        font-weight: bold;
        padding: 1rem;
        border: none;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: 200ms;

        :hover {
          background: #ff0000;
        }
      }
    }
  }
`;
