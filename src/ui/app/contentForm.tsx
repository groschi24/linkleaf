'use client';

import { useStore } from '@/lib/store/zustand';
import {
  ActionIcon,
  Avatar,
  Button,
  Group,
  Menu,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  IconBrandInstagram,
  IconPencil,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';
import { useEffect } from 'react';

export default function ContentForm() {
  const { title, changeTitle, bio, changeBio } = useStore();

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

      <Group gap='xs'>
        <Menu withArrow trigger='hover' openDelay={100} closeDelay={400}>
          <Menu.Target>
            <Avatar variant='default' radius='xl'>
              <IconBrandInstagram size='1.5rem' />
            </Avatar>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<IconPencil size={18} />}>Edit</Menu.Item>
            <Menu.Item leftSection={<IconTrash size={18} />}>Remove</Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <ActionIcon
          variant='filled'
          size='lg'
          radius='xl'
          aria-label='Settings'
        >
          <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Group>

      <Group justify='flex-end' mt='md'>
        <Button type='submit'>Submit</Button>
      </Group>
    </form>
  );
}
