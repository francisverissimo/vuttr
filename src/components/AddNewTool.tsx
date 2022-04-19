import { FormEvent, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";

import { refreshPage } from "../App";

import { OverlayForm } from "../styles/addNewTool";

export function AddNewTool() {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [link, setLink] = useState<string>();
  const [tags, setTags] = useState<string>();

  function closeForm() {
    const overlayForm = document.querySelector("#overlayForm");
    overlayForm?.classList.remove("active");
  }

  async function addNewToolToDb(event: FormEvent) {
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
    <OverlayForm>
      <div id="formAddNewTool">
        <div id="headerForm">
          <h3>
            <FontAwesomeIcon icon={faPlus} /> Add new tool
          </h3>
          <div id="closeForm" onClick={() => closeForm()}>
            <FontAwesomeIcon icon={faXmarkSquare} size="2x" />
          </div>
        </div>

        <form onSubmit={addNewToolToDb}>
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
