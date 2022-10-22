import Box from "@awsui/components-react/box";
import Button from "@awsui/components-react/button";
import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";

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
            <SpaceBetween
              direction="horizontal"
              size="xs"
            >
              <Button
                href={projectRepoLink}
                target="_blank"
                iconAlign="right"
                iconName="external"
                variant="primary"
              >
                Github
              </Button>
            </SpaceBetween>
          }
        >
          { appTitle }
        </Header>
      }
    >
      <Box variant="p">
        Create ImageBuilder components using an interactive component builder.
      </Box>
      <Box variant="p">
        Work in progress...
      </Box>
    </Container>
  );
}

export default Home;