import { useCallback, useEffect, useRef } from "react";
import { X } from "phosphor-react";
import { OverlayModal } from "./styles";
import { useTools } from "../../hooks/useTools";

type RemoveToolModalType = {
  closeModalRemove: () => void;
  showModalRemove: boolean;
  setShowModalRemove: React.Dispatch<React.SetStateAction<boolean>>;
  toolId: number;
  toolTitle: string;
};

export function RemoveToolModal(props: RemoveToolModalType) {
  const { closeModalRemove, setShowModalRemove, showModalRemove, toolId, toolTitle } = props;
  const modalFormRef = useRef(null);
  const { removeTool } = useTools();

  const keypress = useCallback(
    (e: KeyboardEvent) => e.key === "Escape" && setShowModalRemove(false),
    [setShowModalRemove, showModalRemove]
  );

  useEffect(() => {
    document.addEventListener("keydown", keypress);
    return () => document.removeEventListener("keydown", keypress);
  }, [keypress]);

  function closeModalForm(e: React.MouseEvent<HTMLDivElement>) {
    if (modalFormRef.current === e.target) {
      setShowModalRemove(false);
    }
  }

  return (
    <OverlayModal ref={modalFormRef} onClick={closeModalForm}>
      <div id="modal">
        <div id="closeForm" onClick={closeModalRemove}>
          <X size={32} />
        </div>

        <p>
          Are you sure you want to remove tool
          <span> {toolTitle}</span>?
        </p>

        <div className="buttons">
          <button id="cancelButton" onClick={closeModalRemove}>
            CANCEL
          </button>

          <button id="removeButton" onClick={() => removeTool(toolId)}>
            REMOVE
          </button>
        </div>
      </div>
    </OverlayModal>
  );
}
