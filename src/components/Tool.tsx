import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "../styles/tool.scss";

type ToolsType = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export function Tool(props: ToolsType) {
  return (
    <div id="tool" key={props.id}>
      <div className="headerTool">
        <div className="title">{props.title}</div>
        <button>
          <FontAwesomeIcon icon={faXmark} /> remove
        </button>
      </div>
      <div className="link">{props.link}</div>
      <div className="description">{props.description}</div>
      <div className="tags">{props.tags}</div>
    </div>
  );
}
