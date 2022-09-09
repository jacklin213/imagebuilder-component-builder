import Link from "@awsui/components-react/link";

export const projectRepoLink = "https://github.com/jacklin213/awsui-react-template";
export const awsuiDocLink= "https://github.com/aws/awsui-documentation";
export const ghPagesActionLink = "https://github.com/peaceiris/actions-gh-pages";
export const reactRouterDomLink = "https://github.com/remix-run/react-router";
export const createReactAppLink = "https://github.com/facebook/create-react-app";
export const npmAwsUiComponentsLink = "https://www.npmjs.com/package/@awsui/components-react";
export const npmAwsUiGlobalStylesLink = "https://www.npmjs.com/package/@awsui/global-styles";

export const renderLink = (link, text, external=true) => {
  return (
    <Link
      external={external}
      href={link}
    >
      {text}
    </Link>
  );
};
