import styled from "styled-components";

export const ToolCard = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border: 0.15rem solid black;

  .headerTool {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .title {
      font-size: 2rem;
      color: #2f55cc;
      font-weight: 500;
      text-decoration: underline;
    }

    button {
      border: none;
      background: transparent;
      font-size: 1.6rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        font-size: 1.7rem;
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  .link {
    margin-bottom: 1rem;
  }

  .description {
    margin-bottom: 1rem;
  }

  .tags {
    font-weight: 700;
  }
`;
