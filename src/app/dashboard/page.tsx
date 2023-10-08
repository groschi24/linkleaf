'use client';

import '@/styles/devices.min.css';
import '@/styles/customdevices.css';

import {
  Button,
  Checkbox,
  ColorPicker,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

export default function Home() {
  const [linkBackgroundColor, onLinkBackgroundColorChange] = useState(
    'rgba(47, 119, 150, 0.7)'
  );
  const [linkTextColor, onLinkTextColorChange] = useState(
    'rgba(255, 255, 255, 1)'
  );

  const form = useForm({
    initialValues: {
      title: 'Caroline Berger',
      bio: 'I am a fashion influancer, that loves to create posts on tiktok.',
      linkBold: false,
      linkSize: 'base',
    },
  });

  return (
    <main className='p-12'>
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

          <Group mt='md'>
            <div>
              <Text>Link Background</Text>

              <ColorPicker
                format='rgba'
                value={linkBackgroundColor}
                onChange={onLinkBackgroundColorChange}
              />
            </div>

            <div>
              <Text>Link Text</Text>
              <ColorPicker
                format='rgba'
                value={linkTextColor}
                onChange={onLinkTextColorChange}
              />
            </div>
          </Group>

          <Checkbox label='Link Bold' {...form.getInputProps('linkBold')} />
          <Select
            label='Link Size'
            data={['xs', 'sm', 'base', 'lg', 'xl']}
            {...form.getInputProps('linkSize')}
          />

          <Group justify='flex-end' mt='md'>
            <Button type='submit'>Submit</Button>
          </Group>
        </form>

        <div className='flex flex-1 justify-end'>
          <div className='hidden text-xs text-sm text-base text-lg text-xl' />
          <div className='relative mx-auto border-gray-800 text- bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]'>
            <div className='h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg'></div>
            <div className='h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg'></div>
            <div className='h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg'></div>
            <div className='h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg'></div>
            <div className='rounded-[2rem] overflow-hidden overflow-y-scroll scrollbar-hide w-[272px] h-[572px] bg-white'>
              <div className='py-12 px-8 text-center flex flex-col gap-2 items-center'>
                <div className='w-20 h-20 mb-4 rounded-full border border-solid border-slate-700' />
                <span className='text-xl font-bold text-black'>
                  {form.values.title.length > 0
                    ? form.values.title
                    : 'Please add title'}
                </span>
                <span className='text-sm text-black'>
                  {form.values.bio.length > 0
                    ? form.values.bio
                    : 'Please add bio'}
                </span>
                <div className='flex gap-2 mt-4'>
                  <div className='w-6 h-6 rounded-full border border-solid border-slate-700' />
                  <div className='w-6 h-6 rounded-full border border-solid border-slate-700' />
                  <div className='w-6 h-6 rounded-full border border-solid border-slate-700' />
                  <div className='w-6 h-6 rounded-full border border-solid border-slate-700' />
                </div>
                <span className='uppercase text-sm font-bold mt-4 mb-2'>
                  Useful links
                </span>
                <div className='w-full flex flex-col gap-2'>
                  <div
                    className='flex justify-center items-center px-6 py-2 w-full rounded'
                    style={{ background: linkBackgroundColor }}
                  >
                    <span
                      className={`${
                        form.values.linkBold ? 'font-bold' : ''
                      } text-${form.values.linkSize}`}
                      style={{ color: linkTextColor }}
                    >
                      Lorem Ipsum
                    </span>
                  </div>
                  <div
                    className='flex justify-center items-center px-6 py-2 w-full rounded'
                    style={{ background: linkBackgroundColor }}
                  >
                    <span
                      className={`${
                        form.values.linkBold ? 'font-bold' : ''
                      } text-${form.values.linkSize}`}
                      style={{ color: linkTextColor }}
                    >
                      Lorem Ipsum
                    </span>
                  </div>
                </div>
                <span className='uppercase text-sm font-bold mt-4 mb-2'>
                  Show your support
                </span>
                <div className='w-full flex flex-col gap-2'>
                  <div
                    className='flex justify-center items-center px-6 py-2 w-full rounded'
                    style={{ background: linkBackgroundColor }}
                  >
                    <span
                      className={`${
                        form.values.linkBold ? 'font-bold' : ''
                      } text-${form.values.linkSize}`}
                      style={{ color: linkTextColor }}
                    >
                      Buy me a coffee!
                    </span>
                  </div>
                </div>

                <div className='mt-12'>
                  <span>LinkLeaf</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Group>
    </main>
  );
}
