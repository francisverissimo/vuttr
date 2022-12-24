import styled from "styled-components";

export const ContentLoading = styled.div`
  display: flex;
  justify-content: center;
  padding-block: 20vh;
  padding-inline: 1rem;

  .circle-notch {
    color: ${(props) => props.theme.mainColor};
    font-size: 10rem;
    animation: rotating 800ms linear infinite;
  }

  .div-middle {
    align-self: flex-end;

    .circle {
      color: ${(props) => props.theme.mainColorLight};
      font-size: 2rem;
      animation: ping 500ms cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  }

  .circle-dashed {
    color: ${(props) => props.theme.mainColorLight};
    font-size: 10rem;
    animation: rotating 1600ms linear infinite;
  }

  @keyframes rotating {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
