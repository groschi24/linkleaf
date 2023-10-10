'use client';

import { useStore } from '@/lib/store/zustand';
import {
  ActionIcon,
  Avatar,
  Button,
  Group,
  Menu,
  Text,
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
import ProfileDropzone from './profileDropzone';

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
