import Header from "@awsui/components-react/header";
import HelpPanel from "@awsui/components-react/help-panel";

import { awsuiDocLink, projectRepoLink, renderLink } from "../constants/Links";

function InfoPane() {
  return (
    <>
    <HelpPanel 
      header={<Header>Info Pane</Header>}
      footer={<p>Created by jacklin213</p>}
    >
      <div>
        <p>Here are some links to the resources used for this project</p>
        <ul>
          <li>{renderLink(projectRepoLink, "awsui-react-template Github")}</li>
          <li>{renderLink(awsuiDocLink, "@awsui-documentation")}</li>
        </ul>  
      </div>
    </HelpPanel>
    </>
  );
}

export default InfoPane;