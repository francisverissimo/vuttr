import { useEffect, useState } from "react";

import { Tool } from "./components/Tool";

import "./styles/app.scss";

type ToolsType = {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
};

function App() {
  const [tools, setTools] = useState<ToolsType[]>();

  async function getTools() {
    try {
      const response = await fetch("http://localhost:3000/tools");
      const data = await response.json();
      // console.log(data);
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
        <section>
          <input type="text" />
          <input type="checkbox" name="" id="" />
          <label htmlFor="">search in tags only</label>
          <button>+ add</button>
        </section>
        <section>
          {tools?.map(tool => {
            return (
              <Tool
                key={tool.id}
                id={tool.id}
                title={tool.title}
                description={tool.description}
                link={tool.link}
                tags={tool.tags}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
