import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { refreshPage } from "../App";

import { RemoveToolModal } from "./RemoveToolModal";
import { ButtonRemoveTool, ToolCard } from "../styles/tool";

type ToolsType = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export function Tool(props: ToolsType) {
  const [showModalRemove, setShowModalRemove] = useState(false);

  function openModalRemove() {
    setShowModalRemove(e => !e);
  }

  async function deleteTool(toolId: number) {
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

  return (
    <ToolCard key={props.id}>
      <div className="headerTool">
        <div className="title">{props.title}</div>
        <ButtonRemoveTool onClick={openModalRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </ButtonRemoveTool>
      </div>
      <div className="link">{props.link}</div>
      <div className="description">{props.description}</div>
      <div className="tags">{props.tags}</div>

      {showModalRemove ? (
        <RemoveToolModal
          closeModalRemove={() => setShowModalRemove(e => !e)}
          setShowModalRemove={setShowModalRemove}
          showModalRemove={showModalRemove}
          toolId={props.id}
          toolTitle={props.title}
          deleteTool={() => deleteTool(props.id)}
        />
      ) : null}
    </ToolCard>
  );
}
