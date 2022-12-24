import { TrashSimple } from "phosphor-react";
import { useState } from "react";
import { animated, useTransition } from "react-spring";
import { RemoveToolModal } from "../RemoveToolModal";
import { ButtonRemoveTool, ToolCard } from "./styles";

type ToolsType = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
  // getAllTools: () => void;
};

export function Tool(props: ToolsType) {
  const [showModalRemove, setShowModalRemove] = useState(false);
  const transtion = useTransition(showModalRemove, {
    config: { duration: 250 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  function openModalRemove() {
    setShowModalRemove((e) => !e);
  }

  async function deleteTool(toolId: number) {
    try {
      await fetch(`http://localhost:3000/tools/${toolId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      setShowModalRemove(false);
      // props.getAllTools();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ToolCard key={props.id}>
      <div className="headerTool">
        <div className="title">{props.title}</div>
        <ButtonRemoveTool onClick={openModalRemove}>
          <TrashSimple />
        </ButtonRemoveTool>
      </div>
      <div className="link">{props.link.substring(8)}</div>
      <div className="description">{props.description}</div>
      <div className="tags">{props.tags}</div>

      {transtion((style, item) =>
        item ? (
          <animated.div style={style}>
            <RemoveToolModal
              closeModalRemove={() => setShowModalRemove((e) => !e)}
              setShowModalRemove={setShowModalRemove}
              showModalRemove={showModalRemove}
              toolId={props.id}
              toolTitle={props.title}
              deleteTool={() => deleteTool(props.id)}
            />
          </animated.div>
        ) : null
      )}
    </ToolCard>
  );
}
