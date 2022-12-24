import styled from "styled-components";

export const NoResult = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  overflow: hidden;

  img {
    max-width: 32rem;
  }

  p {
    max-width: 100%;
    color: #555;
    font-weight: 500;
    font-size: 1.6rem;
    
    span {
      display: block;
      color: ${(props) => props.theme.mainColor};
      font-weight: 600;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
