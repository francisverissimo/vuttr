import { FormEvent, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "../styles/addNewTool.scss";

type ToolsType = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export function AddNewTool() {
  const [id, setId] = useState<string>();
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
      id: id,
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
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="overlayForm">
      <div id="formAddNewTool" onMouseLeave={closeForm}>
        <h3>
          <FontAwesomeIcon icon={faPlus} /> Add new tool
        </h3>
        <form onSubmit={addNewToolToDb}>
          <label htmlFor="">Tool name</label>
          <input
            type="text"
            onChange={event => setTitle(event.target.value)}
            value={title}
          />

          <label htmlFor="">Tool link</label>
          <input
            type="text"
            onChange={event => setLink(event.target.value)}
            value={link}
          />

          <label htmlFor="">Tool description</label>
          <textarea
            onChange={event => setDescription(event.target.value)}
            value={description}
          />

          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            onChange={event => setTags(event.target.value)}
            value={tags}
          />

          <button type="submit">Add tool</button>
        </form>
      </div>
    </div>
  );
}
