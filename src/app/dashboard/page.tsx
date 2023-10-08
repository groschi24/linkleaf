'use client';

import '@/styles/devices.min.css';
import '@/styles/customdevices.css';

import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Home() {
  const form = useForm({
    initialValues: {
      title: '',
      bio: '',
    },
  });

  return (
    <main>
      <Group align='flex-start'>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Group align='center' justify='space-between'>
            <div
              style={{
                width: 50,
                height: 50,
                border: '1px solid black',
                borderRadius: 9999,
              }}
            />
            <TextInput
              withAsterisk
              label='Title'
              placeholder='Title'
              {...form.getInputProps('title')}
            />

            <TextInput
              withAsterisk
              label='Bio'
              placeholder='Bio'
              {...form.getInputProps('bio')}
            />
          </Group>

          <Group justify='flex-end' mt='md'>
            <Button type='submit'>Submit</Button>
          </Group>
        </form>

        <Group justify='flex-end'>
          <div className='relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]'>
            <div className='h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg'></div>
            <div className='h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg'></div>
            <div className='h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg'></div>
            <div className='h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg'></div>
            <div className='rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800'>
              <img
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png'
                className='dark:hidden w-[272px] h-[572px]'
                alt=''
              />
              <img
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png'
                className='hidden dark:block w-[272px] h-[572px]'
                alt=''
              />
            </div>
          </div>
        </Group>
      </Group>
    </main>
  );
}
