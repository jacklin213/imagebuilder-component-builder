import { useState } from "react";
import AttributeEditor from "@cloudscape-design/components/attribute-editor";
import Input from "@cloudscape-design/components/input";
import { GenericEditorProps } from "./Editor";

export interface StepInputEditorProps extends GenericEditorProps<{ inputs: { [key: string]: any } }> {
  action: string;
}

interface AttributeEditorItem {
  key?: string;
  value?: string;
}

const generateInitialItems = (inputs: { [key: string]: any }): AttributeEditorItem[] => {
  return Object.keys(inputs).map((input) => ({ key: input, value: "" }));
};

/**
 * Iterates through the list of editorItems and adds it to the object only if the key exists
 */
const convertToInputs = (editorItems: AttributeEditorItem[]) => {
  return editorItems.reduce((obj, { key, value }) => (key ? { ...obj, [key]: value } : obj), {});
};

function StepInputEditor(props: StepInputEditorProps) {
  const { data, onChange } = props;
  const [items, setItems] = useState(generateInitialItems(data.inputs));

  const onInputChange = (itemIndex: number, key: string, value: string) => {
    const tmpItems = [...items];
    const tmpItem = { ...tmpItems[itemIndex] };
    tmpItem[key as keyof AttributeEditorItem] = value;
    tmpItems[itemIndex] = tmpItem;
    setItems(tmpItems);
    onChange("inputs", convertToInputs(tmpItems));
  };

  return (
    <AttributeEditor
      onAddButtonClick={() => setItems([...items, {}])}
      onRemoveButtonClick={({ detail: { itemIndex } }) => {
        const tmpItems = [...items];
        tmpItems.splice(itemIndex, 1);
        setItems(tmpItems);
        onChange("inputs", convertToInputs(tmpItems));
      }}
      items={items}
      addButtonText="Add input"
      definition={[
        {
          label: "Key",
          control: (item, index) => (
            <Input
              value={item?.key ?? ""}
              placeholder="Enter key"
              onChange={({ detail: { value } }) => onInputChange(index, "key", value)}
            />
          )
        },
        {
          label: "Value",
          control: (item, index) => (
            <Input
              value={item?.value ?? ""}
              placeholder="Enter value"
              onChange={({ detail: { value } }) => onInputChange(index, "value", value)}
            />
          )
        }
      ]}
      removeButtonText="Remove"
      empty="No items associated with the resource."
    />
  );
}

export default StepInputEditor;
