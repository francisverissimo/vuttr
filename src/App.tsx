import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Tool } from "./components/Tool";
import { AddNewTool } from "./components/AddNewTool";

import "./styles/app.scss";

type ToolsType = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export function refreshPage() {
  window.location.reload();
}

function App() {
  const [tools, setTools] = useState<ToolsType[]>();

  function openForm() {
    const overlayForm = document.querySelector("#overlayForm");
    overlayForm?.classList.add("active");
  }

  async function getTools() {
    try {
      const response = await fetch("http://localhost:3000/tools");
      const data = await response.json();
      setTools(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTools();
  }, []);

  return (
    <>
      <header>
        <h1>VUTTR</h1>
        <h2>Very Usefull Tools to Remember</h2>
      </header>

      <main>
        <section id="sectionSubHeader">
          <div>
            <input type="text" />
            <input type="checkbox" name="" id="" />
            <label htmlFor="">search in tags only</label>
          </div>
          <button onClick={openForm}>
            <FontAwesomeIcon icon={faPlus} /> Add
          </button>
        </section>

        <section id="sectionTools">
          {tools?.map(tool => {
            return (
              <Tool
                key={tool.id}
                id={tool.id}
                title={tool.title}
                description={tool.description}
                link={tool.link}
                tags={tool.tags.map(tag => `#${tag} `)}
              />
            );
          })}
        </section>

        <section>
          <AddNewTool />
        </section>
      </main>
    </>
  );
}

export default App;
