import { social_paltforms } from '@/lib/social_links';
import { TSocialIcon } from '@/lib/store/zustand';
import { fuzzysearch } from '@/utils/text';
import {
  ActionIcon,
  Avatar,
  Button,
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
  IconChevronLeft,
  IconChevronRight,
  IconPencil,
  IconPlus,
  IconSearch,
  IconTrash,
} from '@tabler/icons-react';
import { useState } from 'react';
import SocialLogo from 'social-logos';

interface IProps {
  socialIcons: TSocialIcon[];
  onAdd: (platform: string, username: string) => void;
}

export default function SocialLinks(props: IProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [username, setUsername] = useState('');

  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearch] = useDebouncedValue(searchValue, 200);

  return (
    <>
      <Group gap='xs'>
        {props.socialIcons.map((icon) => (
          <Menu
            key={icon.platform}
            withArrow
            trigger='hover'
            openDelay={100}
            closeDelay={400}
          >
            <Menu.Target>
              <Avatar variant='default' radius='xl'>
                {/* <IconBrandInstagram size='1.5rem' /> */}
                <SocialLogo
                  icon={icon.platform.toLowerCase() as any}
                  size={18}
                />
              </Avatar>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item leftSection={<IconPencil size={18} />}>Edit</Menu.Item>
              <Menu.Item leftSection={<IconTrash size={18} />}>
                Remove
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ))}

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

      <Modal
        opened={opened}
        onClose={() => {
          close();
          setSelected(null);
          setSearchValue('');
        }}
        title={
          <Group>
            {selected && (
              <ActionIcon
                variant='subtle'
                color='gray'
                onClick={() => setSelected(null)}
              >
                <IconChevronLeft size={18} />
              </ActionIcon>
            )}
            <Text fw='bold'>Add {selected ? selected : 'Social'} Icon</Text>
          </Group>
        }
        centered
      >
        {selected ? (
          <>
            <TextInput
              placeholder='Username'
              rightSectionWidth={42}
              leftSection={<IconSearch size={18} />}
              mb='md'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {/* TODO: ADD VALIDATION NOT NULL USERNAME */}
            <Button
              w='100%'
              variant='outline'
              color='dark'
              onClick={() => {
                props.onAdd(selected, username);

                close();
                setSelected(null);
                setUsername('');
                setSearchValue('');
              }}
            >
              Add to LinkLeaf
            </Button>
          </>
        ) : (
          <>
            <TextInput
              placeholder='Search questions'
              rightSectionWidth={42}
              leftSection={<IconSearch size={18} />}
              mb='md'
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <div className='max-h-[300px] overflow-y-scroll scrollbar-hide flex flex-col gap-2'>
              {social_paltforms
                .filter((item) => {
                  const duplicate = props.socialIcons.find(
                    (icon) => item === icon.platform
                  );

                  if (duplicate !== undefined) {
                    return false;
                  }

                  if (debouncedSearch.length < 3) {
                    return true;
                  }

                  return fuzzysearch(
                    debouncedSearch.toLowerCase(),
                    item.toLowerCase()
                  );
                })
                .map((item) => (
                  <Paper
                    key={item}
                    withBorder
                    p='sm'
                    className='cursor-pointer hover:bg-black hover:text-white hover:fill-white duration-150'
                    onClick={() => setSelected(item)}
                  >
                    <Group justify='space-between'>
                      <Group gap='sm'>
                        <SocialLogo
                          icon={item.toLowerCase() as any}
                          size={18}
                        />
                        <Text>{item}</Text>
                      </Group>

                      <IconChevronRight size={18} />
                    </Group>
                  </Paper>
                ))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
