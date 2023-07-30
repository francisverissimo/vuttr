import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { Tool } from "../types";

interface ToolsContextInterface {
  tools: Tool[] | undefined;
  setTools: Dispatch<SetStateAction<Tool[] | undefined>>;
  addTool: (tool: { title: string; link: string; description: string; tags: string[] }) => void;
  removeTool: (id: number) => void;
}

interface ToolsContextProviderProps {
  children: ReactNode;
}

export const ToolsContext = createContext({} as ToolsContextInterface);

export function ToolsContextProvider({ children }: ToolsContextProviderProps) {
  const [tools, setTools] = useState<Tool[]>();

  function addTool(tool: { title: string; link: string; description: string; tags: string[] }) {
    if (tools) {
      setTools(() => {
        const newArrayTools = [
          ...tools,
          {
            id: tools.length + 1,
            title: tool.title,
            description: tool.description,
            link: tool.link,
            tags: tool.tags,
          },
        ];

        localStorage.setItem("tools", JSON.stringify(newArrayTools));
        return newArrayTools;
      });
    }
  }

  function removeTool(toolId: number) {
    if (tools) {
      setTools(() => {
        const filteredTools = tools.filter((tool) => tool.id !== toolId);
        localStorage.setItem("tools", JSON.stringify(filteredTools));
        return filteredTools;
      });
    }
  }

  return (
    <ToolsContext.Provider value={{ tools, setTools, addTool, removeTool }}>
      {children}
    </ToolsContext.Provider>
  );
}
