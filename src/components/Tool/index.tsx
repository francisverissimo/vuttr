import { useState } from "react";
import { animated, useTransition } from "react-spring";
import { Tool as ToolType } from "../../types";
import { RemoveToolModal } from "../RemoveToolModal";
import { TrashSimple } from "phosphor-react";
import { ButtonRemoveTool, ToolCard } from "./styles";

export function Tool(props: ToolType) {
  const [showModalRemove, setShowModalRemove] = useState(false);
  const transtion = useTransition(showModalRemove, {
    config: { duration: 128 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  function openModalRemove() {
    setShowModalRemove((e) => !e);
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

      {transtion(
        (style, item) =>
          item && (
            <animated.div style={style}>
              <RemoveToolModal
                toolId={props.id}
                toolTitle={props.title}
                showModalRemove={showModalRemove}
                setShowModalRemove={setShowModalRemove}
                closeModalRemove={() => setShowModalRemove((e) => !e)}
              />
            </animated.div>
          )
      )}
    </ToolCard>
  );
}
