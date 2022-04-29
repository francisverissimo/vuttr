import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook } from "react-content-loader";

import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import { Tool } from "../components/Tool";
import { AddNewTool } from "../components/AddNewTool";
import { SearchNoResult } from "../components/SearchNoResults";

import {
  SectionHeader,
  Main,
  SubHeader,
  ButtonOpenModalForm,
  SearchInputs,
  Checkbox
} from "../styles/home";
import GlobalStyle from "../styles/global";

type ToolsType = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [tools, setTools] = useState<ToolsType[]>();
  const [inputSearch, setInputSearch] = useState("");
  const [searchTagsOnly, setSearchTagsOnly] = useState(false);

  const transtion = useTransition(showModal, {
    config: { duration: 250 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  function openModalForm() {
    setShowModal(e => !e);
  }

  async function getAllTools() {
    try {
      const response = await fetch("http://localhost:3000/tools");
      const data = await response.json();
      setTools(data);
      setShowModal(false);
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
        setTools(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (inputSearch.trim() !== "" && !searchTagsOnly) {
      try {
        const response = await fetch(
          `http://localhost:3000/tools?q=${keywords}`
        );
        const data = await response.json();
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
        {tools === undefined ? (
          <Facebook
            style={{ paddingTop: "5rem" }}
            viewBox="0 50 100 100"
            backgroundColor="#bbb"
            foregroundColor="#ddd"
          />
        ) : (
          <>
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

            {transtion((style, item) =>
              item ? (
                <animated.div style={style}>
                  <AddNewTool
                    onClickCloseButton={() => setShowModal(prev => !prev)}
                    setShowModal={setShowModal}
                    showModal={showModal}
                  />
                </animated.div>
              ) : null
            )}

            <section id="sectionTools">
              {tools &&
                tools.length > 0 &&
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
                })}
              {tools && tools.length === 0 && (
                <SearchNoResult keyWords={inputSearch} />
              )}
            </section>
          </>
        )}
      </Main>
    </>
  );
}
