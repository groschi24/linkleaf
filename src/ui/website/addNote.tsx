'use client';

import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/navigation';

export default function AddNote() {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      title: '',
      content: '',
    },
  });

  async function addNote(values: typeof form.values) {
    try {
      await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      router.refresh();
    } catch (e) {
      console.error(e);
    }

    form.reset();
  }

  return (
    <form onSubmit={form.onSubmit(addNote)}>
      <TextInput
        withAsterisk
        required
        label='Title'
        placeholder='Title'
        {...form.getInputProps('title')}
      />

      <TextInput
        withAsterisk
        required
        label='Content'
        placeholder='Content'
        {...form.getInputProps('content')}
      />

      <Group justify='flex-end' mt='md'>
        <Button type='submit'>Submit</Button>
      </Group>
    </form>
  );
}
