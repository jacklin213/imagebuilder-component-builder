import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "@awsui/components-react/app-layout";
import Box from "@awsui/components-react/box"
import Grid from "@awsui/components-react/grid";
import Toggle from "@awsui/components-react/toggle";

import Breadcrumbs from "./components/Breadcrumbs";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import InfoPane from "./components/InfoPane";
import Navigation from "./components/Navigation";
import TopNavigationBar from "./components/TopNavigationBar";

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
            <Box><Breadcrumbs /></Box>
            <Box float="right" margin={{top: 'xxs'}}>
              <Toggle
                checked={isDarkMode}
                onChange={({ detail }) => setDarkMode(detail.checked)}
              >
                Dark Mode
              </Toggle>
            </Box>
          </Grid>
        }
        content={
          <Routes>
            <Route path="/" element={<Home />} />
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
