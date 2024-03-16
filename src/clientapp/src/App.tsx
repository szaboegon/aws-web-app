import { MantineProvider, createTheme } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
