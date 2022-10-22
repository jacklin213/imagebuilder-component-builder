import { Fragment, useState } from "react";
import Button from "@cloudscape-design/components/button";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import Container from "@cloudscape-design/components/container";
import ExpandableSection from "@cloudscape-design/components/expandable-section";
import FormField from "@cloudscape-design/components/form-field";
import Header from "@cloudscape-design/components/header";
import Input from "@cloudscape-design/components/input";
import Select from "@cloudscape-design/components/select";
import SpaceBetween from "@cloudscape-design/components/space-between";
import { ComponentDocumentPhase, ComponentDocumentStep, PhaseType } from "./DocumentSchema";
import { EditorProps } from "./Editor";
import StepInputEditor from "./StepInputEditor";

interface BuilderDocumentStep extends ComponentDocumentStep {
  phase: PhaseType;
}

const defaultStep: BuilderDocumentStep = {
  phase: PhaseType.Build,
  name: "HelloWorldStep",
  action: "ExecuteBash",
  inputs: {
    commands: ['echo "Hello World! Build."']
  }
};

const defaultPhases: ComponentDocumentPhase[] = [
  {
    name: PhaseType.Build,
    steps: [defaultStep]
  }
  // {
  //   name: PhaseType.Validate,
  //   steps: []
  // },
  // {
  //   name: PhaseType.Test,
  //   steps: []
  // }
];

function StepBuilder(props: EditorProps) {
  const [phases, updatePhases] = useState(defaultPhases);
  const [steps, updateSteps] = useState([defaultStep]);

  const updateFormData = (newSteps: BuilderDocumentStep[]) => {
    const newPhases = [...phases];
    // We know that new steps are PhaseType.Build by default which is index 0 in phases
    newPhases[0].steps = newSteps.map(({ phase, ...step }) => step);
    updatePhases(newPhases);
    props.onChange("phases", newPhases);
  };

  const addStep = (index = -1) => {
    const newSteps = [...steps];
    // Reset name to be empty
    const stepToAdd = { ...defaultStep, name: "" };
    if (index === -1) {
      newSteps.push(stepToAdd);
    } else {
      newSteps.splice(index, 0, stepToAdd);
    }
    updateSteps(newSteps);
    updateFormData(newSteps);
  };

  const removeStep = (index: number) => {
    const newSteps = [...steps];
    if (0 <= index && index < newSteps.length) {
      newSteps.splice(index, 1);
      updateSteps(newSteps);
      updateFormData(newSteps);
    } else {
      console.error(`[StepOutOfBounds] Error removing step: ${index + 1}. Currently only ${steps.length} steps exist.`);
    }
  };

  const updateStepData = (index: number, key: string, value: any) => {
    const newSteps = [...steps];
    if (0 <= index && index < newSteps.length) {
      newSteps[index] = { ...newSteps[index], [key]: value } as BuilderDocumentStep;
      updateSteps(newSteps);
      updateFormData(newSteps);
    } else {
      console.error(`[StepOutOfBounds] Error updating step: ${index + 1}. Currently only ${steps.length} steps exist.`);
    }
  };

  const renderAddStepButton = (index: number) => {
    return <Button onClick={() => addStep(index)}>Add step</Button>;
  };

  const noOp = () => {};

  const actionSelectItems = [
    { label: "ExecuteBash", value: "ExecuteBash" },
    { label: "ExecutePowerShell", value: "ExecutePowerShell" }
  ];

  const onFailureSelectItems = [
    {
      label: "Abort",
      value: "Abort",
      description:
        "Fails the step after the maximum number of attempts, and stops running. Sets status for phase and document to Failed"
    },
    {
      label: "Continue",
      value: "Continue",
      description:
        "Fails the step after the maximum number of attempts, and continues to run remaining steps. Sets status for phase and document to Failed"
    },
    {
      label: "Ignore",
      value: "Ignore",
      description:
        "Sets the step to IgnoredFailure after the the maximum number of failed attempts, and continues to run remaining steps. Sets status for phase and document to SuccessWithIgnoredFailure"
    }
  ];

  return (
    <Container header={<Header variant="h2">Step builder</Header>}>
      <SpaceBetween size="m">
        {renderAddStepButton(0)}
        {steps.map((step, index) => (
          <Fragment key={`stepbuilder_${index}`}>
            <ExpandableSection
              variant="container"
              header={
                <Header
                  variant="h3"
                  actions={
                    <Button onClick={() => removeStep(index)} disabled={steps.length === 1}>
                      Remove step
                    </Button>
                  }
                >
                  Step {index + 1}
                </Header>
              }
              defaultExpanded
            >
              <SpaceBetween size="m">
                <ColumnLayout columns={2}>
                  <FormField
                    label="Name"
                    description="User-defined name for the step"
                    // errorText={getErrorText('You must specify a component name.')}
                    i18nStrings={{ errorIconAriaLabel: "Error" }}
                  >
                    <Input
                      value={step.name}
                      ariaRequired={true}
                      placeholder="SampleStepName"
                      onChange={({ detail: { value } }) => updateStepData(index, "name", value)}
                    />
                  </FormField>
                  <FormField
                    label="Phase"
                    description="Component phase this step belongs to. Currently only Build is supported"
                    // errorText={getErrorText('You must specify a component description.')}
                    i18nStrings={{ errorIconAriaLabel: "Error" }}
                  >
                    <Select
                      selectedOption={{ label: "Build", value: "build" }}
                      onChange={({ detail }) => noOp()}
                      options={Object.entries(PhaseType).map(([type, value]) => ({ label: type, value }))}
                      selectedAriaLabel="Selected phase"
                      disabled
                    />
                  </FormField>
                  <FormField
                    label="Action"
                    description="Keyword pertaining to the module that runs the step"
                    // errorText={getErrorText('You must specify a component description.')}
                    i18nStrings={{ errorIconAriaLabel: "Error" }}
                  >
                    <Select
                      selectedOption={
                        actionSelectItems.find(({ value }) => value === step.action) ?? actionSelectItems[0]
                      }
                      onChange={({
                        detail: {
                          selectedOption: { value }
                        }
                      }) => updateStepData(index, "action", value)}
                      options={actionSelectItems}
                      selectedAriaLabel="Selected action"
                    />
                  </FormField>
                  <FormField
                    label={
                      <>
                        Timeout seconds<i> - optional</i>
                      </>
                    }
                    description="Number of seconds that the step runs before failing or retrying. Supports -1 value, which indicates infinite timeout. 0 and other negative values are not allowed."
                    // errorText={getErrorText('You must specify a component name.')}
                    i18nStrings={{ errorIconAriaLabel: "Error" }}
                  >
                    <Input
                      value={step.timeoutSeconds?.toString() ?? ""}
                      type="number"
                      inputMode="numeric"
                      ariaRequired={true}
                      placeholder="7200"
                      onChange={({ detail: { value } }) =>
                        updateStepData(index, "timeoutSeconds", value ? Number.parseInt(value) : undefined)
                      }
                    />
                  </FormField>
                  <FormField
                    label={
                      <>
                        On failure<i> - optional</i>
                      </>
                    }
                    description="Specifies what the step should do in case of failure. Valid values: Abort | Continue | Ignore"
                    // errorText={getErrorText('You must specify a component name.')}
                    i18nStrings={{ errorIconAriaLabel: "Error" }}
                  >
                    <Select
                      selectedOption={onFailureSelectItems.find(({ value }) => value === step.onFailure) ?? null}
                      onChange={({
                        detail: {
                          selectedOption: { value }
                        }
                      }) => updateStepData(index, "onFailure", value)}
                      options={onFailureSelectItems}
                      selectedAriaLabel="Selected failure mode"
                    />
                  </FormField>
                  <FormField
                    label={
                      <>
                        Max attempts<i> - optional</i>
                      </>
                    }
                    description="Maximum number of attempts allowed before failing the step."
                    // errorText={getErrorText('You must specify a component name.')}
                    i18nStrings={{ errorIconAriaLabel: "Error" }}
                  >
                    <Input
                      value={step.maxAttempts?.toString() ?? ""}
                      type="number"
                      inputMode="numeric"
                      ariaRequired={true}
                      placeholder="1"
                      onChange={({ detail: { value } }) =>
                        value && updateStepData(index, "maxAttempts", value ? Number.parseInt(value) : undefined)
                      }
                    />
                  </FormField>
                </ColumnLayout>
                <ColumnLayout columns={1}>
                  <FormField
                    label="Inputs"
                    description="Parameters required by the action module to run the step."
                    stretch={true}
                    // errorText={getErrorText('You must specify a component description.')}
                    i18nStrings={{ errorIconAriaLabel: "Error" }}
                  >
                    <StepInputEditor
                      action={step.action}
                      data={step}
                      onChange={(key, value) => updateStepData(index, key, value)}
                    />
                  </FormField>
                </ColumnLayout>
              </SpaceBetween>
            </ExpandableSection>
            {renderAddStepButton(index + 1)}
          </Fragment>
        ))}
      </SpaceBetween>
    </Container>
  );
}

export default StepBuilder;
