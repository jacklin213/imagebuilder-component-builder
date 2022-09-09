import { useLocation } from "react-router-dom";
import BreadcrumbGroup from "@awsui/components-react/breadcrumb-group";

import Routes from "../Routes";

function getBreadcrumbItems() {
  const hashString = getHashString();
  const routePaths = hashString.split("/");

  return routePaths.reduce((items, path) => {
    if (path === "" || path === "home") {
      return [
        { text: Routes.home.text, href: Routes.home.href }
      ];
    } else {
      return [
        ...items,
        {
          text: Routes[path].text,
          href: Routes[path].href
        }
      ]
    }
  }, []);
}

function getHashString() {
  const rawHash = window.location.hash ?? "/";
  return rawHash.startsWith("#") ? rawHash.substring(1) : rawHash;
}

function Breadcrumbs() {
  useLocation();

  return (
    <BreadcrumbGroup
      items={getBreadcrumbItems()}
      ariaLabel="Breadcrumbs"
    />
    );
}

export default Breadcrumbs;