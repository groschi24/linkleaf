'use client';

import { Group, Tabs, Text, Title } from '@mantine/core';
import { IconColorPicker, IconLink } from '@tabler/icons-react';
import ContentForm from '@/ui/app/contentForm';
import StyleForm from '@/ui/app/styleForm';
import PhoneMock from '@/ui/app/phoneMock';

export default function Home() {
  return (
    <main>
      <div className='flex justify-between'>
        <div className='relative p-4 flex-1 w-full min-h-screen border-0 border-r border-solid border-slate-200'>
          <Tabs defaultValue='content'>
            <Tabs.List grow>
              <Tabs.Tab value='content' leftSection={<IconLink size={18} />}>
                Content
              </Tabs.Tab>
              <Tabs.Tab
                value='style'
                leftSection={<IconColorPicker size={18} />}
              >
                Style
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value='content' py='lg'>
              <Title order={3} size='h1'>
                Let&apos;s add your details
              </Title>
              <Text size='sm' c='dimmed' mb='xl'>
                Define what content to display on your page
              </Text>

              <ContentForm />
            </Tabs.Panel>
            <Tabs.Panel value='style' p='md'>
              <StyleForm />
            </Tabs.Panel>
          </Tabs>
        </div>

        <div className='relative pl-8 pr-4 pt-12'>
          <PhoneMock />
        </div>
      </div>
    </main>
  );
}
