import { ToolsContextProvider } from "./context/ToolsContext";
import { Home } from "./pages/Home";

export function App() {
  return (
    <ToolsContextProvider>
      <Home />;
    </ToolsContextProvider>
  );
}
