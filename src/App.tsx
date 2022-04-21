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
import { SearchNoResult } from "./components/SearchNoResults";

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
  const [tools, setTools] = useState<ToolsType[]>([]);
  const [inputSearch, setInputSearch] = useState("");
  const [searchTagsOnly, setSearchTagsOnly] = useState(false);

  function openModalForm() {
    setShowModal(e => !e);
  }

  async function getAllTools() {
    try {
      const response = await fetch("http://localhost:3000/tools");
      const data = await response.json();
      setTools(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getSearchTools(keywords: string) {
    if (inputSearch.trim() !== "" && searchTagsOnly) {
      try {
        const response = await fetch(
          `http://localhost:3000/tools?tags_like=${keywords}`
        );
        const data = await response.json();
        // console.log(data);
        setTools(data);
      } catch (error) {
        console.error(error);
      }
    }

    // pesquisa geral
    if (inputSearch.trim() !== "" && !searchTagsOnly) {
      try {
        const response = await fetch(
          `http://localhost:3000/tools?q=${keywords}`
        );
        const data = await response.json();
        // console.log(data);
        setTools(data);
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    if (inputSearch === "") getAllTools();

    if (inputSearch !== "") getSearchTools(inputSearch);
  }, [inputSearch]);

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
                checked={searchTagsOnly}
                onChange={e => {
                  setSearchTagsOnly(e.target.checked);
                }}
              />
              <label htmlFor="seachTagsOnly">search in tags only</label>
            </Checkbox>
            <input
              type="text"
              name="inputTextSeach"
              id="inputTextSeach"
              maxLength={25}
              onChange={e => {
                setInputSearch(e.target.value);
              }}
              value={inputSearch}
            />
          </SearchInputs>
          <ButtonOpenModalForm>
            <FontAwesomeIcon icon={faPlusCircle} onClick={openModalForm} />
          </ButtonOpenModalForm>
        </SubHeader>

        <section id="sectionTools">
          {tools.length > 0 ? (
            tools.map(tool => {
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
            })
          ) : <SearchNoResult keyWords={inputSearch} /> }
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
