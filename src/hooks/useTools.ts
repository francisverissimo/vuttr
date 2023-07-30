import { useContext } from "react";
import { ToolsContext } from "../context/ToolsContext";

export function useTools() {
  return useContext(ToolsContext);
}
