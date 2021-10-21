import { Text, Box, render } from 'ink';
import SelectInput from 'ink-select-input';
import { UncontrolledTextInput as TextInput } from 'ink-text-input';
import React, { useEffect, useState } from 'react';

import type { TemplateId } from '../constants';
import { templates } from '../constants';
import { initialise } from '../initialise';
import type { Mutable } from '../types';

interface ProgressReportProps {
  selectedTemplate: TemplateId;
  packageName: string;
}

const ProgressReport = ({
  selectedTemplate,
  packageName,
}: ProgressReportProps) => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    const generator = initialise(selectedTemplate, packageName);

    const stepGenerator = async () => {
      for await (const step of generator) {
        setMessage(step);
      }
    };

    stepGenerator();
  }, [selectedTemplate, packageName]);

  return (
    <Box flexDirection="column">
      <Text>Template selected: {selectedTemplate}</Text>

      {message ? <Text key={message}>{message}</Text> : null}
    </Box>
  );
};

const Form = () => {
  const [packageName, setPackageName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId>();

  if (packageName && selectedTemplate) {
    return (
      <ProgressReport
        selectedTemplate={selectedTemplate}
        packageName={packageName}
      />
    );
  }

  return (
    <Box flexDirection="column">
      <Box>
        <Box marginRight={1}>
          <Text>Package name:</Text>
        </Box>
        {packageName ? (
          <Text>{packageName}</Text>
        ) : (
          <TextInput onSubmit={(value) => setPackageName(value)} />
        )}
      </Box>
      {packageName ? (
        <SelectInput
          items={templates as Mutable<typeof templates>}
          onSelect={(item) => setSelectedTemplate(item.value)}
        />
      ) : null}
    </Box>
  );
};

const Prompt = () => (
  <Box flexDirection="column">
    <Text>Initialise Crackle project</Text>
    <Form />
  </Box>
);

export const renderPrompt = () => render(<Prompt />);
