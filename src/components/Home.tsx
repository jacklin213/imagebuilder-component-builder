import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";

import { projectRepoLink } from "../constants/Links";
import { appTitle } from "../constants/Constants";

function Home() {
  document.title = appTitle;

  return (
    <Container
      header={
        <Header
          variant="h2"
          description="Created by jacklin213"
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button href={projectRepoLink} target="_blank" iconAlign="right" iconName="external" variant="primary">
                Github
              </Button>
            </SpaceBetween>
          }
        >
          {appTitle}
        </Header>
      }
    >
      <Box variant="p">Create ImageBuilder components using an interactive component builder.</Box>
      <Box variant="p">Work in progress...</Box>
    </Container>
  );
}

export default Home;
