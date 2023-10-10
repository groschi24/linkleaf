import { fuzzysearch, levenshteinDistance } from '@/utils/text';
import {
  ActionIcon,
  Avatar,
  Group,
  Menu,
  Modal,
  Paper,
  Text,
  TextInput,
} from '@mantine/core';
import { useDebouncedValue, useDisclosure } from '@mantine/hooks';
import {
  IconBrandInstagram,
  IconChevronRight,
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
} from '@tabler/icons-react';
import { useState } from 'react';

export default function SocialLinks() {
  const [opened, { open, close }] = useDisclosure(false);

  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearch] = useDebouncedValue(searchValue, 200);

  return (
    <>
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
          <IconPlus
            style={{ width: '70%', height: '70%' }}
            stroke={1.5}
            onClick={open}
          />
        </ActionIcon>
      </Group>

      <Modal opened={true} onClose={close} title='Add Social Icon' centered>
        <TextInput
          placeholder='Search questions'
          rightSectionWidth={42}
          leftSection={<IconSearch size={18} />}
          mb='md'
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <div className='max-h-[300px] overflow-y-scroll scrollbar-hide flex flex-col gap-2'>
          {[
            'Instagram',
            'TikTok',
            'Facebook',
            'Yoututbe',
            'Twitter',
            'Tumblr',
            'SnapChat',
          ]
            .filter((item) => {
              if (debouncedSearch.length < 3) {
                return true;
              }

              return fuzzysearch(
                debouncedSearch.toLowerCase(),
                item.toLowerCase()
              );
            })
            .map((item) => (
              <Paper key={item} withBorder p='sm'>
                <Group justify='space-between'>
                  <Group gap='sm'>
                    <IconBrandInstagram size={18} />
                    <Text>{item}</Text>
                  </Group>

                  <IconChevronRight size={18} />
                </Group>
              </Paper>
            ))}
        </div>
      </Modal>
    </>
  );
}
