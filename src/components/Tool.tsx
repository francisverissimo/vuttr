type ToolsType = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

import "../styles/tool.scss";

export function Tool(props: ToolsType) {
  return (
    <div id="tool" key={props.id}>
      <div className="headerTool">
        <div className="title">{props.title}</div>
        <button>x remove</button>
      </div>
      <div className="link">{props.link}</div>
      <div className="description">{props.description}</div>
      <div className="tags">{props.tags}</div>
    </div>
  );
}
