import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { Tool } from "./components/Tool";
import { AddNewTool } from "./components/AddNewTool";

import {
  SectionHeader,
  Main,
  SubHeader,
  ButtonOpenModalForm,
  SearchInputs,
  Checkbox
} from "./styles/app";
import GlobalStyle from "./styles/global";

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
  const [showModal, setShowModal] = useState(false);
  const [tools, setTools] = useState<ToolsType[]>();
  const [inputSearch, setInputSearch] = useState("");

  function openModalForm() {
    setShowModal(e => !e);
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

  async function getSearchTools(keywords: string) {
    const inputCheckbox = document.querySelector("#seachTagsOnly");

    try {
      if (inputSearch.trim() !== "" && inputCheckbox?.ariaChecked) {
        const response = await fetch(
          `http://localhost:3000/tools?tags_like=${keywords}`
        );
        const data = await response.json();
        setTools(data);
      } else if (inputSearch.trim() !== "") {
        const response = await fetch(
          `http://localhost:3000/tools?q=${keywords}`
        );
        const data = await response.json();
        setTools(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTools();
  }, []);

  return (
    <>
      <GlobalStyle />
      <SectionHeader>
        <header>
          <h1>VUTTR</h1>
          <h2>Very Usefull Tools to Remember</h2>
        </header>
      </SectionHeader>

      <Main>
        <SubHeader>
          <SearchInputs>
            <Checkbox>
              <input
                type="checkbox"
                name="seachTagsOnly"
                id="seachTagsOnly"
                onChange={event => setInputSearch(event.target.value)}
                value={inputSearch}
              />
              <label htmlFor="">search in tags only</label>
            </Checkbox>
            <input type="text" name="inputTextSeach" id="inputTextSeach" />
          </SearchInputs>
          <ButtonOpenModalForm>
            <FontAwesomeIcon icon={faPlusCircle} onClick={openModalForm} />
          </ButtonOpenModalForm>
        </SubHeader>

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

        <>
          {showModal ? (
            <AddNewTool
              onClickCloseButton={() => setShowModal(prev => !prev)}
              setShowModal={setShowModal}
              showModal={showModal}
            />
          ) : null}
        </>
      </Main>
    </>
  );
}

export default App;
