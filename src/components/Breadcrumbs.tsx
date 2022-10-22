import { useLocation } from "react-router-dom";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";

import AppRoutes, { isValidRoute } from "../AppRoutes";

interface BreadcumbItem {
  text: string;
  href: string;
}

function getBreadcrumbItems() {
  const hashString = getHashString();
  const routePaths = hashString.split("/");

  return routePaths.reduce((items, path) => {
    if (path === "") {
      return [
        { text: AppRoutes.home.text, href: AppRoutes.home.href }
      ];
    } else if (!isValidRoute(path)) {
      return [
        { text: AppRoutes.error.text, href: AppRoutes.error.href }
      ];
    } else {
      return [
        ...items,
        {
          text: AppRoutes[path].text,
          href: AppRoutes[path].href
        }
      ]
    }
  }, [] as BreadcumbItem[]);
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