import ContentLayout from "@cloudscape-design/components/content-layout";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { useState } from "react";
import { dump } from "js-yaml";
import ComponentDetails from "./ComponentDetails";
import helloWorldDoc from './hello_world.json';
import { appTitle } from "../../constants/Constants";
import { ComponentDocument } from "./DocumentSchema";
import BuilderOutput from "./BuilderOutput";
import StepBuilder from "./StepBuilder";

export interface EditorData {
  details: {
    name: string;
    description: string;
  }
  outputObj: ComponentDocument;
  output: string;
};

export interface GenericEditorProps<T> {
  data: T;
  onChange(key: string, value: any): any;
}

export interface EditorProps extends GenericEditorProps<EditorData> {}

function Editor() {
  document.title = `Editor - ${appTitle}`;

  const [data, updateData] = useState(
    {
      details: {
        name: "",
        description: ""
      },
      outputObj: helloWorldDoc,
      output: dump(helloWorldDoc, { noRefs: true })
    }
  );

  const onDetailChange = (key: string, value: any) => {
    const modifiedData = {...data};
    modifiedData.details[key as keyof typeof modifiedData.details] = value;
    modifiedData.outputObj[key as keyof typeof modifiedData.details] = value;
    modifiedData.output = dump(modifiedData.outputObj, { noRefs: true });
    updateData({...modifiedData});
  };

  const onBuilderChange = (key: string, value: any) => {
    const modifiedData = {...data};
    modifiedData.outputObj[key as keyof ComponentDocument] = value;
    modifiedData.output = dump(modifiedData.outputObj, { noRefs: true });
    updateData({...modifiedData});
  };

  const noOp = () => {}

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Create your component using the builder below.">
          Editor
        </Header>
      }
    >
      <SpaceBetween size="l">
        <ComponentDetails data={data} onChange={onDetailChange} />
        <BuilderOutput data={data} onChange={noOp} />
        <StepBuilder data={data} onChange={onBuilderChange} />
      </SpaceBetween>
    </ContentLayout>
  );
}

export default Editor;
