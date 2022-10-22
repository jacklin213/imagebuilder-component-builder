import Button from "@cloudscape-design/components/button";
import Popover from "@cloudscape-design/components/popover";
import StatusIndicator from "@cloudscape-design/components/status-indicator";

export interface CopyButtonProps {
  contentTitle: string;
  content: string;
}

function CopyButton({ contentTitle, content }: CopyButtonProps) {
  return (
    <Popover
      size="small"
      position="top"
      triggerType="custom"
      dismissButton={false}
      content={<StatusIndicator type="success">{contentTitle} copied</StatusIndicator>}
    >
      <Button
        iconName="copy"
        onClick={() => navigator.clipboard.writeText(content)}
      >
        Copy
      </Button>
    </Popover>
  );
}

export default CopyButton;
