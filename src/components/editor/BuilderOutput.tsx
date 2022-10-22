import { Container, Header, Textarea } from "@cloudscape-design/components";
import CopyButton from "../CopyButton";
import { EditorProps } from "./Editor";

function BuilderOutput({ data }: EditorProps) {
  return (
    <Container
      header={
        <Header
          variant="h2"
          description="The generated component document. Do not manually edit as changes will be overwritten"
          actions={
            <CopyButton contentTitle="Component document" content={data.output} />
          }
        >
          Builder output
        </Header>
      }
    >
      <Textarea value={data.output} disabled rows={15}></Textarea>
    </Container>
  );
}

export default BuilderOutput;
