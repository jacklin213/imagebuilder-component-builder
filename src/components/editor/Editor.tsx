import ContentLayout from "@cloudscape-design/components/content-layout";
import Header from "@cloudscape-design/components/header";
import { useState } from "react";
import { dump } from "js-yaml";
import ComponentDetails from "./ComponentDetails";
import helloWorldDoc from './hello_world.json';
import { appTitle } from "../../constants/Constants";
import { ComponentDocument } from "./DocumentSchema";
import BuilderOutput from "./BuilderOutput";
import { SpaceBetween } from "@cloudscape-design/components";

export interface EditorData {
  details: {
    name: string;
    description: string;
  }
  outputObj: ComponentDocument;
  output: string;
};

export interface EditorProps {
  data: EditorData;
  onChange(key: string, value: any): any;
}

function Editor() {
  document.title = `Editor - ${appTitle}`;

  const [data, updateData] = useState(
    {
      details: {
        name: "",
        description: ""
      },
      outputObj: helloWorldDoc,
      output: dump(helloWorldDoc)
    }
  );

  const onDetailChange = (key: string, value: any) => {
    const modifiedData = {...data};
    modifiedData.details[key as keyof typeof modifiedData.details] = value;
    modifiedData.outputObj[key as keyof typeof modifiedData.details] = value;
    modifiedData.output = dump(modifiedData.outputObj);
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
      </SpaceBetween>
    </ContentLayout>
  );
}

export default Editor;
