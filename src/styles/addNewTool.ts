import styled from "styled-components";

export const OverlayForm = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  #formAddNewTool {
    background: #ede6db;
    padding: 2rem;
    height: auto;
    width: 62rem;
    color: #1d5c63;
    border-radius: 2rem;

    #headerForm {
      display: flex;
      justify-content: space-between;

      #closeForm {
        cursor: pointer;
        color: #ff0000aa;
        transition: 0.2s;

        :hover {
          color: #ff0000;
        }
      }

      h3 {
        margin-bottom: 2rem;
      }
    }

    form {
      height: auto;
      display: flex;
      flex-direction: column;
    }

    label {
      color: #1d5c63;
      margin-bottom: 0.2rem;
    }

    input {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: none;
      font-size: 2rem;
      color: #444;
    }

    textarea {
      margin-bottom: 1rem;
      padding: 0.5rem;
      width: 100%;
      height: 8rem;
      border-radius: 0.7rem;
      border: none;
      font-size: 2rem;
      color: #444;
    }

    button {
      width: 10rem;
      padding: 1rem;
      margin-left: auto;
      margin-top: 1rem;
      background: #1d5c63dd;
      color: #ede6db;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.2s;
      font-weight: bold;

      :hover {
        background: #1d5c63;
      }
    }
  }
`;
