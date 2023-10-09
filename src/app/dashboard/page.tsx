'use client';

import '@/styles/devices.min.css';
import '@/styles/customdevices.css';

import {
  Button,
  Checkbox,
  ColorPicker,
  Group,
  Select,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import PhoneMock from '../ui/app/phoneMock';
import { useStore } from '@/lib/store/zustand';

export default function Home() {
  const {
    title,
    changeTitle,
    bio,
    changeBio,
    linkBold,
    changeLinkBold,
    linkSize,
    changeLinkSize,
    linkBackgroundColor,
    changeLinkBackgroundColor,
    linkTextColor,
    changeLinkTextColor,
  } = useStore();

  const form = useForm({
    initialValues: {
      title: title,
      bio: bio,
      linkBold: linkBold,
      linkSize: linkSize,
    },
  });

  useEffect(() => {
    changeTitle(form.values.title);
    changeBio(form.values.bio);
    changeLinkBold(form.values.linkBold);
    changeLinkSize(form.values.linkSize);
  }, [form.values]);

  return (
    <main className='p-12'>
      <div className='flex justify-between'>
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
                onChange={changeLinkBackgroundColor}
              />
            </div>

            <div>
              <Text>Link Text</Text>
              <ColorPicker
                format='rgba'
                value={linkTextColor}
                onChange={changeLinkTextColor}
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

        <PhoneMock />
      </div>
    </main>
  );
}
