// Component document schema as outlined in https://docs.aws.amazon.com/imagebuilder/latest/userguide/toe-use-documents.html#document-schema

export interface ComponentDocument {
  name?: string;
  description?: string;
  schemaVersion: string;
  phases: ComponentDocumentPhase[];
}

export interface ComponentDocumentPhase {
  name: string;
  steps: ComponentDocumentStep[];
}

export interface ComponentDocumentStep {
  name: string;
  action: string;
  timeoutSeconds?: number;
  onFailure?: string;
  maxAttempts?: number;
  inputs: {
    [key: string]: any
  }
}
