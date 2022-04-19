import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { refreshPage } from "../App";

import { ToolCard } from "../styles/tool";

type ToolsType = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export function Tool(props: ToolsType) {
  async function deleteTool(toolId: number, toolTitle: string) {
    if (window.confirm(`Are you sure you want to remove ${toolTitle}`)) {
      try {
        await fetch(`http://localhost:3000/tools/${toolId}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
        });

        refreshPage();
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <ToolCard key={props.id}>
      <div className="headerTool">
        <div className="title">{props.title}</div>
        <button onClick={() => deleteTool(props.id, props.title)}>
          <FontAwesomeIcon icon={faXmark} /> remove
        </button>
      </div>
      <div className="link">{props.link}</div>
      <div className="description">{props.description}</div>
      <div className="tags">{props.tags}</div>
    </ToolCard>
  );
}
