import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import { refreshPage } from "../App";

import { OverlayForm } from "../styles/addNewTool";

type AddNewToolType = {
  onClickCloseButton: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export function AddNewTool(props: AddNewToolType) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");

  const modalFormRef = useRef(null);

  const closeModalForm = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalFormRef.current === e.target) {
      props.setShowModal(false);
    }
  };

  async function addNewToolToDb(event: React.FormEvent) {
    event.preventDefault();

    const formInputValues = {
      title: title,
      description: description,
      link: link,
      tags: tags?.split(" ")
    };

    try {
      await fetch("http://localhost:3000/tools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formInputValues)
      });

      refreshPage();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <OverlayForm ref={modalFormRef} onClick={e => closeModalForm(e)}>
      <div id="formAddNewTool">
        <div id="headerForm">
          <h3>
            <FontAwesomeIcon icon={faPlus} /> Add new tool
          </h3>
          <div id="closeForm" onClick={props.onClickCloseButton}>
            <FontAwesomeIcon icon={faXmarkCircle} size="2x" />
          </div>
        </div>

        <form onSubmit={addNewToolToDb as any}>
          <label htmlFor="">Tool name</label>
          <input
            type="text"
            required
            onChange={event => setTitle(event.target.value)}
            value={title}
          />

          <label htmlFor="">Tool link</label>
          <input
            type="text"
            required
            onChange={event => setLink(event.target.value)}
            value={link}
          />

          <label htmlFor="">Tool description</label>
          <textarea
            required
            onChange={event => setDescription(event.target.value)}
            value={description}
          />

          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            required
            onChange={event => setTags(event.target.value)}
            value={tags}
          />

          <button type="submit">Add tool</button>
        </form>
      </div>
    </OverlayForm>
  );
}
