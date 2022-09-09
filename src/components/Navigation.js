import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Badge from "@awsui/components-react/badge";
import SideNavigation from "@awsui/components-react/side-navigation";

import Routes from "../Routes";
import { awsuiDocLink } from "../constants/Links";


function Navigation() {
  const location = useLocation();
  const [activeHref, setActiveHref] = useState(`#${location.pathname}` ?? Routes.home.href);

  useEffect(() => {
    return setActiveHref(`#${location.pathname}`);
  }, [location])

  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: "awsui-react-template" }}
      items={[
        { type: "link", text: Routes.home.text, href: Routes.home.href },
        { type: "link", text: Routes.components.text, href: Routes.components.href },
        { type: "divider" },
        {
          type: "link",
          text: "Dummy Notifications",
          info: <Badge color="red">2</Badge>
        },
        { type: "divider" },
        {
          type: "link",
          text: "awsui-documentation",
          href: awsuiDocLink,
          external: true
        }
      ]}
    />
  );
}

export default Navigation;