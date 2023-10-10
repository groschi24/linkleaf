'use client';

import { useStore } from '@/lib/store/zustand';
import {
  Button,
  Checkbox,
  ColorPicker,
  Group,
  Select,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';

export default function StyleForm() {
  const {
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
      linkBold: linkBold,
      linkSize: linkSize,
    },
  });

  useEffect(() => {
    changeLinkBold(form.values.linkBold);
    changeLinkSize(form.values.linkSize);
  }, [form.values]);

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
  );
}
