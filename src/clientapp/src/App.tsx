import { AppShell, Burger, MantineProvider, createTheme } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CatalogPage } from "./pages/CatalogPage";
import { Header } from "./components/Header";
import { useDisclosure } from "@mantine/hooks";
import { SellPage } from "./pages/SellPage";

const theme = createTheme({});

function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 70 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <AppShell.Navbar>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>navbar</div>
        </AppShell.Navbar>

        <AppShell.Header>
          <Header contentWidth="70%" />
        </AppShell.Header>

        <AppShell.Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/sell" element={<SellPage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
