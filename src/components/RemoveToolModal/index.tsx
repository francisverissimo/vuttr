import { X } from "phosphor-react";
import { useCallback, useEffect, useRef } from "react";
import { OverlayModal } from "./styles";

type RemoveToolModalType = {
  closeModalRemove: () => void;
  deleteTool: (toolId: number) => void;
  showModalRemove: boolean;
  setShowModalRemove: React.Dispatch<React.SetStateAction<boolean>>;
  toolId: number;
  toolTitle: string;
};

export function RemoveToolModal(props: RemoveToolModalType) {
  const modalFormRef = useRef(null);

  const keypress = useCallback(
    (e: KeyboardEvent) => e.key === "Escape" && props.setShowModalRemove(false),
    [props.setShowModalRemove, props.showModalRemove]
  );

  useEffect(() => {
    document.addEventListener("keydown", keypress);
    return () => document.removeEventListener("keydown", keypress);
  }, [keypress]);

  function closeModalForm(e: React.MouseEvent<HTMLDivElement>) {
    if (modalFormRef.current === e.target) {
      props.setShowModalRemove(false);
    }
  }

  return (
    <OverlayModal ref={modalFormRef} onClick={closeModalForm}>
      <div id="modal">
        <div id="closeForm" onClick={props.closeModalRemove}>
          <X size={32} />
        </div>
        <p>
          Are you sure you want to remove tool
          <span> {props.toolTitle}</span>?
        </p>
        <div className="buttons">
          <button id="cancelButton" onClick={props.closeModalRemove}>
            Cancel
          </button>
          <button
            id="removeButton"
            onClick={() => props.deleteTool(props.toolId)}
          >
            Remove
          </button>
        </div>
      </div>
    </OverlayModal>
  );
}
