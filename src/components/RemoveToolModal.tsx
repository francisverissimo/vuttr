import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef } from "react";

import { OverlayModal } from "../styles/removeToolModal";

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

  function closeModalForm(e: React.MouseEvent<HTMLDivElement>) {
    if (modalFormRef.current === e.target) {
      props.setShowModalRemove(false);
    }
  }

  return (
    <OverlayModal ref={modalFormRef} onClick={closeModalForm}>
      <div id="modal">
        <div id="closeForm">
          <FontAwesomeIcon
            icon={faXmarkCircle}
            size="2x"
            onClick={props.closeModalRemove}
          />
        </div>
        <p>
          Are you sure you want to remove tool <span>{props.toolTitle}</span> ?
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
