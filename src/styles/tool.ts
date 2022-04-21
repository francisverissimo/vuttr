import styled from "styled-components";

export const ToolCard = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 1rem #bbb, -0.3rem -0.3rem 1rem #bbb;

  .headerTool {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .title {
      font-size: 2rem;
      color: #1d5c63;;
      font-weight: 600;
    }
  }

  .link {
    color: #222;
    margin-bottom: 1rem;
  }

  .description {
    color: #222;
    margin-bottom: 1rem;
  }

  .tags {
    color: #222;
    font-weight: 700;
  }
`;

export const ButtonRemoveTool = styled.button`
  border: none;
  background: transparent;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ff0000bb;
  transition: 0.2s;

  &:hover {
    color: #ff0000;
  }

  svg {
    margin: 1rem 2rem;
  }
`;
