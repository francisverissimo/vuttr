import styled from "styled-components";

export const OverlayForm = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  #formAddNewTool {
    background: white;
    padding: 1rem;
    height: 50%;
    width: 50%;

    #headerForm {
      display: flex;
      justify-content: space-between;

      #closeForm {
        cursor: pointer;
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

    label,
    input,
    textarea,
    button {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    input {
      margin-bottom: 1rem;
      padding: 0.5rem;
    }

    textarea {
      margin-bottom: 1rem;
      padding: 0.5rem;
      max-width: 45rem;
      max-height: 8rem;
      margin-left: auto;
      margin-right: auto;
    }

    button {
      width: 10rem;
      padding: 1rem;
      margin-left: auto;
    }
  }
`;
