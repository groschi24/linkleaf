'use client';

import { useStore } from '@/lib/store/zustand';
import { Button, Group, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import InputColorPicker from './inputColorPicker';

export default function StyleForm() {
  const {
    linkWeight,
    changeLinkWeight,
    linkSize,
    changeLinkSize,
    linkBackgroundColor,
    changeLinkBackgroundColor,
    linkTextColor,
    changeLinkTextColor,
  } = useStore();

  const form = useForm({
    initialValues: {
      linkWeight: linkWeight,
      linkSize: linkSize,
    },
  });

  useEffect(() => {
    changeLinkWeight(form.values.linkWeight);
    changeLinkSize(form.values.linkSize);
  }, [form.values]);

  //#D2E722

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <div className='flex flex-col gap-2'>
        <InputColorPicker
          label='Link Background'
          initialColor={linkBackgroundColor}
          onChange={changeLinkBackgroundColor}
        />

        <InputColorPicker
          label='Link Text'
          initialColor={linkTextColor}
          onChange={changeLinkTextColor}
        />

        <Select
          label='Link Weight'
          description='Not all weights are supported from every font'
          data={[
            'thin',
            'light',
            'normal',
            'medium',
            'semibold',
            'bold',
            'extrabold',
            'black',
          ]}
          {...form.getInputProps('linkWeight')}
        />
        <Select
          label='Link Size'
          data={['xs', 'sm', 'base', 'lg', 'xl']}
          {...form.getInputProps('linkSize')}
        />
      </div>

      {/* <Group justify='flex-end' mt='md'>
        <Button type='submit'>Submit</Button>
      </Group> */}
    </form>
  );
}
