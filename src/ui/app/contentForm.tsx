'use client';

import { useStore } from '@/lib/store/zustand';
import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import ProfileDropzone from './profileDropzone';
import SocialLinks from './socialLinks';

export default function ContentForm() {
  const { title, changeTitle, bio, changeBio, changeProfileImage } = useStore();

  const form = useForm({
    initialValues: {
      title: title,
      bio: bio,
    },
  });

  useEffect(() => {
    changeTitle(form.values.title);
    changeBio(form.values.bio);
  }, [form.values]);

  return (
    <form
      onSubmit={form.onSubmit((values) => console.log(values))}
      className='flex flex-col gap-6'
    >
      <ProfileDropzone onDrop={(files) => changeProfileImage(files[0])} />

      <Group>
        <TextInput
          withAsterisk
          label='Title'
          placeholder='Title'
          className='flex-1'
          {...form.getInputProps('title')}
        />

        <TextInput
          withAsterisk
          label='Bio'
          placeholder='Bio'
          className='flex-1'
          {...form.getInputProps('bio')}
        />
      </Group>

      <SocialLinks />

      <Group justify='flex-end' mt='md'>
        <Button type='submit'>Submit</Button>
      </Group>
    </form>
  );
}
