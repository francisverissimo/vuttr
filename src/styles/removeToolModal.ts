import styled from "styled-components";

export const OverlayModal = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: #ede6db;
    padding: 2rem;
    height: auto;
    width: 62rem;
    color: #1d5c63;
    border-radius: 2rem;

    #closeForm {
      text-align: right;

      svg {
        cursor: pointer;
        color: #ff0000bb;
        transition: 0.2s;

        :hover {
          color: #ff0000;
        }
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
      gap: 2rem;

      #cancelButton {
        padding: 1rem;
        background: #ede6db;
        color: #1d5c63dd;
        border: solid 0.3rem #1d5c63dd;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 0.2s;
        font-weight: bold;

        :hover {
          background: #ede6db;
          color: #1d5c63;
          border: solid 0.3rem #1d5c63;
        }
      }

      #removeButton {
        padding: 1rem;
        background: #ff0000dd;
        color: #ede6db;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 0.2s;
        font-weight: bold;

        :hover {
          background: #ff0000;
        }
      }
    }
  }
`;
