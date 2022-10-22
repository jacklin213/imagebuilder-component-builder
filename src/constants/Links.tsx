import Link from "@cloudscape-design/components/link";

export const projectRepoLink = "https://github.com/jacklin213/imagebuilder-component-builder";
export const awsuiDocLink = "https://github.com/aws/awsui-documentation";
export const cloudscapeLink = "https://cloudscape.design/";
export const npmAwsUiComponentsLink = "https://www.npmjs.com/package/@awsui/components-react";
export const npmAwsUiGlobalStylesLink = "https://www.npmjs.com/package/@awsui/global-styles";

// ImageBuilder doc related links
export const ibDocSchemaLink = "https://docs.aws.amazon.com/imagebuilder/latest/userguide/toe-use-documents.html#document-schema";
export const ibDocActionModuleLink = "https://docs.aws.amazon.com/imagebuilder/latest/userguide/toe-action-modules.html";

export const renderLink = (link: string, text: string, external = true) => {
  return (
    <Link external={external} href={link}>
      {text}
    </Link>
  );
};
