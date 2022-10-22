import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideNavigation from "@cloudscape-design/components/side-navigation";

import Routes from "../AppRoutes";
import { ibDocActionModuleLink, ibDocSchemaLink } from "../constants/Links";
import { appTitle } from "../constants/Constants";

function Navigation() {
  const location = useLocation();
  const [activeHref, setActiveHref] = useState(`#${location.pathname}` ?? Routes.home.href);

  useEffect(() => {
    return setActiveHref(`#${location.pathname}`);
  }, [location]);

  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: appTitle }}
      items={[
        { type: "link", text: Routes.home.text, href: Routes.home.href },
        { type: "link", text: Routes.editor.text, href: Routes.editor.href },
        { type: "divider" },
        {
          type: "link",
          text: "Component document schema",
          href: ibDocSchemaLink,
          external: true
        },
        {
          type: "link",
          text: "Component action module",
          href: ibDocActionModuleLink,
          external: true
        }
      ]}
    />
  );
}

export default Navigation;
