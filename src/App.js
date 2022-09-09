import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AppLayout from "@awsui/components-react/app-layout";
import Box from "@awsui/components-react/box"
import Grid from "@awsui/components-react/grid";
import Toggle from "@awsui/components-react/toggle";

import Breadcrumbs from "./components/Breadcrumbs";
import ComponentsTable from "./components/ComponentsTable";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import InfoPane from "./components/InfoPane";
import Navigation from "./components/Navigation";
import Routes from "./Routes";
import TopNavigationBar from "./components/TopNavigationBar";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

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
        navigation={<Navigation />}
        content={
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path={`/${Routes.home.location}`}><Home /></Route>
            <Route path={`/${Routes.components.location}`}><ComponentsTable /></Route>
            <Route path="*"><Error404 /></Route>
          </Switch>
        }
        tools={<InfoPane />}
      />
    </>
  );
}

export default App;
