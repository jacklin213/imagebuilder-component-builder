import TopNavigation from "@awsui/components-react/top-navigation";

import Routes from "../Routes";
import { projectRepoLink, npmAwsUiComponentsLink, npmAwsUiGlobalStylesLink } from "../constants/Links";

function TopNavigationBar() {
  return (
    <TopNavigation
      id="navbar"
      identity={{
        href: Routes.home.href,
        title: "awsui-react-template",
        logo: {
          src:
            "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDNweCIgaGVpZ2h0PSIzMXB4IiB2aWV3Qm94PSIwIDAgNDMgMzEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGZpbGw9IiMyMzJmM2UiIHN0cm9rZT0iI2Q1ZGJkYiIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0MiIgaGVpZ2h0PSIzMCIgcng9IjIiPjwvcmVjdD4KICAgICAgICA8dGV4dCBmb250LWZhbWlseT0iQW1hem9uRW1iZXItUmVndWxhciwgQW1hem9uIEVtYmVyIiBmb250LXNpemU9IjEyIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjkiIHk9IjE5Ij5Mb2dvPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo=",
          alt: "Service"
        }
      }}
      utilities={[
        {
          type: "button",
          text: "Components",
          ariaLabel: "Components",
          href: Routes.components.href,
        },
        {
          type: "button",
          text: "Github",
          href: projectRepoLink,
          external: true,
          externalIconAriaLabel: " (opens in a new tab)",
          variant: "primary-button"
        },
        {
          type: "menu-dropdown",
          iconName: "settings",
          ariaLabel: "Settings",
          title: "Settings",
          items: [
            {
              id: "dummy-setting",
              text: "Dummy Setting"
            }
          ]
        },
        {
          type: "menu-dropdown",
          text: "Links",
          description: "Additional links and documentation",
          items: [
            {
              id: "npm-awsui-components",
              text: "NPM - @awsui/components-react",
              href: npmAwsUiComponentsLink,
              external: true
            },
            {
              id: "npm-awsui-global-styles",
              text: "NPM - @awsui/global-styles",
              href: npmAwsUiGlobalStylesLink,
              external: true
            }
          ]
        }
      ]}
      i18nStrings={{
        overflowMenuBackIconAriaLabel: "Back",
        overflowMenuDismissIconAriaLabel: "Close menu",
        overflowMenuTitleText: "All",
        overflowMenuTriggerText: "More"
      }}
    />
  );
}

export default TopNavigationBar;