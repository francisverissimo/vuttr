import styled from "styled-components";

export const ToolCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  border-radius: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0.5rem 0.5rem 2rem #00000011, -0.5rem -0.5rem 2rem #00000011;
  background-color: #f5f5f4;

  .headerTool {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 2rem;
      color: ${(props) => props.theme.mainColor};
      font-weight: 600;
    }
  }

  .link {
    color: #777;
    font-weight: 500;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    :hover {
      color: #555;
    }
  }

  .description {
    color: #222;
  }

  .tags {
    color: #444;
    font-weight: 600;
  }
`;

export const ButtonRemoveTool = styled.button`
  border: none;
  background: transparent;
  font-size: 3.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ff0000;
  transition: 200ms;
`;
