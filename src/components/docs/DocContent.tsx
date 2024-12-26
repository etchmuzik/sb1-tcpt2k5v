import React from 'react';
import DocSection from './DocSection';
import CodeBlock from './CodeBlock';

export default function DocContent() {
  return (
    <div className="flex-1 max-w-4xl">
      <DocSection
        id="getting-started"
        title="Getting Started"
        content="Learn how to integrate Beyond AI into your workflow."
      />
      
      <DocSection
        id="installation"
        title="Installation"
        content={
          <>
            <p className="mb-4">Install the Beyond AI package using npm:</p>
            <CodeBlock
              code="npm install @beyond-ai/sdk"
              language="bash"
            />
          </>
        }
      />
      
      <DocSection
        id="configuration"
        title="Configuration"
        content={
          <>
            <p className="mb-4">Configure your API credentials:</p>
            <CodeBlock
              code={`
import { BeyondAI } from '@beyond-ai/sdk';

const client = new BeyondAI({
  apiKey: 'your-api-key',
  region: 'uae'
});`}
              language="typescript"
            />
          </>
        }
      />
    </div>
  );
}