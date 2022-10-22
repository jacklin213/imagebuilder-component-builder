import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "@cloudscape-design/components/app-layout";
import Box from "@cloudscape-design/components/box";
import Grid from "@cloudscape-design/components/grid";
import Toggle from "@cloudscape-design/components/toggle";

import Breadcrumbs from "./components/Breadcrumbs";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import InfoPane from "./components/InfoPane";
import Navigation from "./components/Navigation";
import TopNavigationBar from "./components/TopNavigationBar";
import AppRoutes from "./AppRoutes";
import Editor from "./components/editor/Editor";
import "./App.css";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <TopNavigationBar />
      <AppLayout
        className={isDarkMode ? "awsui-dark-mode" : "awsui-light-mode"}
        headerSelector="#navbar" // Ensure AppLayout is rendered below navbar
        breadcrumbs={
          <Grid gridDefinition={[{ colspan: 6 }, { colspan: 6 }]}>
            <Box>
              <Breadcrumbs />
            </Box>
            <Box float="right" margin={{ top: "xxs" }}>
              <Toggle checked={isDarkMode} onChange={({ detail }) => setDarkMode(detail.checked)}>
                Dark Mode
              </Toggle>
            </Box>
          </Grid>
        }
        content={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={AppRoutes.editor.location} element={<Editor />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        }
        navigation={<Navigation />}
        navigationOpen={isNavOpen}
        onNavigationChange={({ detail: { open } }) => setNavOpen(open)}
        tools={<InfoPane />}
      />
    </>
  );
}

export default App;
