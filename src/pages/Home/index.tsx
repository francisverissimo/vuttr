import { useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import { ThemeProvider } from "styled-components";
import { Tool } from "../../components/Tool";
import { AddNewTool } from "../../components/AddNewTool";
import { SearchNoResult } from "../../components/SearchNoResults";
import { Loading } from "../../components/Loading";
import { Plus } from "phosphor-react";
import { theme } from "../../styles/theme";
import GlobalStyle from "../../styles/global";
import {
  SectionHeader,
  Main,
  SubHeader,
  ButtonOpenModalForm,
  SearchInputs,
  Checkbox,
  Footer,
  Divider,
} from "./styles";

interface ToolType {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [tools, setTools] = useState<ToolType[]>();
  const [inputSearch, setInputSearch] = useState("");
  const [searchTagsOnly, setSearchTagsOnly] = useState(false);

  const transtion = useTransition(showModal, {
    config: { duration: 250 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  function openModalForm() {
    setShowModal((e) => !e);
  }

  async function getTools() {
    try {
      if (!localStorage.getItem("tools")) {
        const response = await fetch("../defaultTools.json");
        const data = await response.json();
        localStorage.setItem("tools", JSON.stringify(data.tools));

        console.log(localStorage.getItem("tools"));
        // setTools(localStorage.getItem("tools"));
        // setShowModal(false);
      } else {
        const tools = JSON.parse(localStorage.getItem("tools") as string);
        // console.log(JSON.parse(tools));
        setTools(tools);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // async function getSearchTools(keywords: string) {
  //   if (inputSearch.trim() !== "" && searchTagsOnly) {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/tools?tags_like=${keywords}`
  //       );
  //       const data = await response.json();
  //       setTools(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   if (inputSearch.trim() !== "" && !searchTagsOnly) {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/tools?q=${keywords}`
  //       );
  //       const data = await response.json();
  //       setTools(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // }

  useEffect(() => {
    getTools().finally(() => console.log("## Call getTools() ##"));
    // if (inputSearch === "") getAllTools();
    // if (inputSearch !== "") getSearchTools(inputSearch);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SectionHeader>
        <header>
          <h1>VUTTR</h1>
          <h2>Very Usefull Tools to Remember</h2>
        </header>
      </SectionHeader>

      <Main>
        {tools === undefined ? (
          <Loading />
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
                    onChange={(e) => {
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
                  placeholder={
                    searchTagsOnly
                      ? `Pesquisa por tags...`
                      : `Pesquisa geral...`
                  }
                  onChange={(e) => {
                    setInputSearch(e.target.value);
                  }}
                  value={inputSearch}
                />

                <ButtonOpenModalForm onClick={openModalForm}>
                  <Plus weight="bold" /> {"Add new tool"}
                </ButtonOpenModalForm>
              </SearchInputs>
            </SubHeader>

            {transtion((style, item) =>
              item ? (
                <animated.div style={style}>
                  <AddNewTool
                    onClickCloseButton={() => setShowModal((prev) => !prev)}
                    setShowModal={setShowModal}
                    showModal={showModal}
                    // getAllTools={getTools}
                  />
                </animated.div>
              ) : null
            )}

            <Divider></Divider>

            <section id="sectionTools">
              {tools &&
                tools.length > 0 &&
                tools.map((tool) => (
                  <Tool
                    key={tool.id}
                    id={tool.id}
                    title={tool.title}
                    description={tool.description}
                    link={tool.link}
                    tags={tool.tags.map((tag) => `#${tag} `)}
                    // getAllTools={getAllTools}
                  />
                ))}

              {tools && tools.length === 0 && (
                <SearchNoResult keyWords={inputSearch} />
              )}
            </section>
            <Divider></Divider>
          </>
        )}
      </Main>

      <Footer>
        <section>
          <p>VUTTR</p>
          <p>Very Usefull Tools to Remember</p>
          <p>
            2022 &copy;
            <a target="_blank" href="https://francissportfolio.vercel.app">
              {" Francis S. Verissimo"}
            </a>
          </p>
          <a target="_blank" href="https://storyset.com/web">
            {"Illustrations > Storyset"}
          </a>
        </section>
      </Footer>
    </ThemeProvider>
  );
}
