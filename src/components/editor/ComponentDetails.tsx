import { ColumnLayout } from "@cloudscape-design/components";
import Container from "@cloudscape-design/components/container";
import FormField from "@cloudscape-design/components/form-field";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";
import Textarea from "@cloudscape-design/components/textarea";
import { EditorProps } from "./Editor";

function ComponentDetails({ data, onChange }: EditorProps) {
  return (
    <Container
      header={
        <Header variant="h2" description="The component details which are included in the component document">
          Component details
        </Header>
      }
    >
      <ColumnLayout columns={2}>
        <FormField
          label="Name"
          description="Name of the component document."
          // errorText={getErrorText('You must specify a component name.')}
          i18nStrings={{ errorIconAriaLabel: "Error" }}
        >
          <Input
            value={data.details.name}
            ariaRequired={true}
            placeholder="HelloWorldTestingDocument"
            onChange={({ detail: { value } }) => onChange("name", value)}
          />
        </FormField>
        <FormField
          label="Description"
          description="Description of the component document."
          stretch={true}
          // errorText={getErrorText('You must specify a component description.')}
          i18nStrings={{ errorIconAriaLabel: "Error" }}
        >
          <Textarea
            placeholder={"This is hello world testing document."}
            value={data.details.description}
            onChange={({ detail: { value } }) => onChange("description", value)}
          />
        </FormField>
      </ColumnLayout>
    </Container>
  );
}

export default ComponentDetails;
