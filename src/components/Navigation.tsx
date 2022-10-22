import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideNavigation from "@awsui/components-react/side-navigation";

import Routes from "../AppRoutes";
import { awsuiDocLink } from "../constants/Links";
import { appTitle } from "../constants/Constants";


function Navigation() {
  const location = useLocation();
  console.log(location);
  const [activeHref, setActiveHref] = useState(`#${location.pathname}` ?? Routes.home.href);

  useEffect(() => {
    return setActiveHref(`#${location.pathname}`);
  }, [location])

  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: appTitle }}
      items={[
        { type: "link", text: Routes.home.text, href: Routes.home.href },
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