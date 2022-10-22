import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import ContentLayout from "@cloudscape-design/components/content-layout";

import { projectRepoLink } from "../constants/Links";
import { appTitle, appTitleLong } from "../constants/Constants";

function Home() {
  document.title = appTitle;

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Created by jacklin213">
          {appTitleLong}
        </Header>
      }
    >
      <Container
        header={
          <Header
            variant="h2"
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button href="#/editor" variant="primary">
                  Create
                </Button>
                <Button href={projectRepoLink} target="_blank" iconAlign="right" iconName="external">
                  Github
                </Button>
              </SpaceBetween>
            }
          >
            Welcome
          </Header>
        }
      >
        <Box variant="p">Create ImageBuilder components using an interactive component builder.</Box>
        <Box variant="p">This application is still a work in progress. Click "Create" to get started.</Box>
      </Container>
    </ContentLayout>
  );
}

export default Home;
