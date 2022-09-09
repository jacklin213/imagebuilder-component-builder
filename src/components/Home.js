import Box from "@awsui/components-react/box";
import Button from "@awsui/components-react/button";
import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";

import { awsuiDocLink, createReactAppLink, ghPagesActionLink, 
  projectRepoLink, reactRouterDomLink, renderLink } from "../constants/Links";

function Home() {
  document.title = "Home - awsui-react-template";

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
          Home - awsui-react-template
        </Header>
      }
    >
      <Box variant="p">
        React template project bootstrapped with {renderLink(createReactAppLink, "Create React App")}.
        Contains a basic implementation of HashRouter using {renderLink(reactRouterDomLink, "react-router-dom")} (5.3.0)
        and uses {renderLink(awsuiDocLink, "@awsui/components-react")}.
      </Box>
      <Box variant="p">
        Project automatically builds and deploys the app to gh-pages 
        using {renderLink(ghPagesActionLink, "peaceiris/actions-gh-pages@v3")}
      </Box>
    </Container>
  );
}

export default Home;