import { ChangeEvent, useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import { ThemeProvider } from "styled-components";
import { Tool } from "../../components/Tool";
import { Tool as ToolType } from "../../types";
import { AddNewTool } from "../../components/AddNewTool";
import { SearchNoResult } from "../../components/SearchNoResults";
import { Loading } from "../../components/Loading";
import { CheckSquare, Square } from "phosphor-react";
import { theme } from "../../styles/theme";
import { useTools } from "../../hooks/useTools";
import {
  SectionHeader,
  Main,
  SubHeader,
  ButtonOpenModalForm,
  SearchInputs,
  Checkbox as CheckboxDiv,
  Footer,
} from "./styles";
import GlobalStyle from "../../styles/global";
import mockData from "../../data/defaultTools.json";
import { Checkbox, FormControlLabel } from "@mui/material";

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [searchTagsOnly, setSearchTagsOnly] = useState(false);
  const { tools, setTools } = useTools();

  const transtion = useTransition(showModal, {
    config: { duration: 128 },
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
        localStorage.setItem("tools", JSON.stringify(mockData.tools));
        setShowModal(false);
        console.log("chamar GetTools()");

        setTools(JSON.parse(localStorage.getItem("tools") as string));
        return;
      }

      const tools = JSON.parse(localStorage.getItem("tools") as string);
      setTools(tools);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSearchTools(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    if (inputValue.length > 2) {
      setTools(
        JSON.parse(localStorage.getItem("tools") as string).filter((tool: ToolType) => {
          if (searchTagsOnly) {
            if (tool.tags.toString().toLowerCase().includes(inputValue.toLowerCase().trim())) {
              return tool;
            }
          } else {
            if (
              tool.title.toLowerCase().includes(inputValue.toLowerCase().trim()) ||
              tool.tags.toString().includes(inputValue.toLowerCase().trim())
            ) {
              return tool;
            }
          }
        })
      );

      return;
    }

    setTools(JSON.parse(localStorage.getItem("tools") as string));
  }

  useEffect(() => {
    getTools();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
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
                  <CheckboxDiv>
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<Square size={26} />}
                          checkedIcon={
                            <CheckSquare size={26} weight="fill" style={{ color: "#1d5c63" }} />
                          }
                          onChange={(e) => {
                            setSearchTagsOnly(e.target.checked);
                          }}
                          value={searchTagsOnly}
                        />
                      }
                      label={<span style={{ fontSize: "18px" }}>search in tags only</span>}
                      labelPlacement="end"
                    />
                  </CheckboxDiv>

                  <input
                    type="text"
                    name="inputTextSeach"
                    id="inputTextSeach"
                    maxLength={25}
                    placeholder={searchTagsOnly ? `Pesquisa por tags...` : `Pesquisa geral...`}
                    onChange={handleSearchTools}
                  />

                  <ButtonOpenModalForm onClick={openModalForm}>Add new tool</ButtonOpenModalForm>
                </SearchInputs>
              </SubHeader>

              {transtion((style, item) =>
                item ? (
                  <animated.div style={style}>
                    <AddNewTool
                      onClickCloseButton={() => setShowModal((prev) => !prev)}
                      setShowModal={setShowModal}
                      showModal={showModal}
                    />
                  </animated.div>
                ) : null
              )}

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
                    />
                  ))}

                {tools && tools.length === 0 && <SearchNoResult />}
              </section>
            </>
          )}
        </Main>

        <Footer>
          <section>
            <p>
              <span>{new Date().getFullYear()}</span>
              &copy;
              <a target="_blank" href="https://francissportfolio.vercel.app">
                {"Francis S. Verissimo"}
              </a>
            </p>

            <a target="_blank" href="https://storyset.com/web">
              {"Illustrations > Storyset"}
            </a>
          </section>
        </Footer>
      </div>
    </ThemeProvider>
  );
}
