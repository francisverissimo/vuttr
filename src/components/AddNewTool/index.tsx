import { X } from "phosphor-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { OverlayForm } from "./styles";

type AddNewToolType = {
  onClickCloseButton: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  // getAllTools: () => void;
};

export function AddNewTool(props: AddNewToolType) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");

  const modalFormRef = useRef(null);

  const keypress = useCallback(
    (e: KeyboardEvent) => e.key === "Escape" && props.setShowModal(false),
    [props.setShowModal, props.showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keypress);

    return () => document.removeEventListener("keydown", keypress);
  }, [keypress]);

  function closeModalForm(e: React.MouseEvent<HTMLDivElement>) {
    if (modalFormRef.current === e.target) {
      props.setShowModal(false);
    }
  }

  function handleTags(keyWords: string): string[] {
    const treatedKeywords = keyWords
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/([^\w]+|\s+)/g, " ")
      .split(" ")
      .filter((e) => e !== "");

    return treatedKeywords;
  }

  function handleTextInput(text: string) {
    const treatedText = text
      .trim()
      .normalize("NFD")
      .replace(/([^\w]+|\s+)/g, " ");

    return treatedText;
  }

  function scrollDownPage() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  async function addNewToolToDb(event: React.FormEvent) {
    event.preventDefault();

    const formInputValues = {
      title: handleTextInput(title),
      description: handleTextInput(description),
      link: handleTextInput(link),
      tags: handleTags(tags),
    };

    try {
      await fetch("http://localhost:3000/tools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formInputValues),
      });

      props.setShowModal(false);
      // props.getAllTools();
    } catch (error) {
      console.error(error);
    }

    scrollDownPage();
  }

  return (
    <OverlayForm ref={modalFormRef} onClick={(e) => closeModalForm(e)}>
      <div id="formAddNewTool">
        <div id="headerForm">
          <h3>Add new tool</h3>
          <div id="closeForm" onClick={props.onClickCloseButton}>
            <X size={32} />
          </div>
        </div>

        <form onSubmit={addNewToolToDb}>
          <label htmlFor="">Tool name</label>
          <input
            type="text"
            required
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />

          <label htmlFor="">Tool link</label>
          <input
            type="text"
            required
            onChange={(event) => setLink(event.target.value)}
            value={link}
          />

          <label htmlFor="">Tool description</label>
          <textarea
            required
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />

          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            required
            onChange={(event) => setTags(event.target.value)}
            value={tags}
          />

          <button type="submit">Add tool</button>
        </form>
      </div>
    </OverlayForm>
  );
}
