import TopNavigation from "@cloudscape-design/components/top-navigation";

import AppRoutes from "../AppRoutes";
import { projectRepoLink, npmAwsUiComponentsLink, npmAwsUiGlobalStylesLink } from "../constants/Links";
import { appTitleLong } from "../constants/Constants";

function TopNavigationBar() {
  return (
    <TopNavigation
      id="navbar"
      identity={{
        href: AppRoutes.home.href,
        title: appTitleLong,
        logo: {
          src: "https://a0.awsstatic.com/main/images/site/fav/favicon.ico",
          alt: "Service"
        }
      }}
      utilities={[
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
