'use client';

import {
  CodeSnippet,
  CodeSnippetCopyButton,
  CodeSnippetHeader,
  CodeSnippetTabsContent,
  CodeSnippetTabsList,
  CodeSnippetTabsTrigger,
} from '@/components/code-snippet'
import { track } from '@vercel/analytics/react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

type InstallerProps = {
  packageName: string;
};

export const Installer = ({ packageName }: InstallerProps) => {
  const [value, setValue] = useState('@ritualchain');

  const commands = {
    '@ritualchain': {
      image: '/assets/ritual-chain.svg',
      code: `npx @ritualchain/cli@latest add ${packageName}`,
    },
    shadcn: {
      image: '/assets/shadcn.svg',
      code: `npx shadcn@latest add ${packageName}`,
    },
  };

  return (
    <CodeSnippet
      className="not-prose shiki shiki-themes github-light github-dark"
      onValueChange={setValue}
      value={value}
    >
      <CodeSnippetHeader>
        <CodeSnippetTabsList>
          {Object.entries(commands).map(([key, command]) => (
            <CodeSnippetTabsTrigger key={key} value={key}>
              <Image
                alt=""
                className="dark:invert"
                height={14}
                src={command.image}
                width={14}
              />
              {key}
            </CodeSnippetTabsTrigger>
          ))}
        </CodeSnippetTabsList>
        <CodeSnippetCopyButton
          onCopy={() => {
            toast.success('Copied to clipboard');
            track('Copy installer code', {
              cli: value,
              package: packageName,
            });
          }}
          onError={() => toast.error('Failed to copy to clipboard')}
          value={commands[value as keyof typeof commands].code}
        />
      </CodeSnippetHeader>
      {Object.entries(commands).map(([key, command]) => (
        <CodeSnippetTabsContent key={key} value={key}>
          {command.code}
        </CodeSnippetTabsContent>
      ))}
    </CodeSnippet>
  );
};
