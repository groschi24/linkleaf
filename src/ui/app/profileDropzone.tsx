'use client';

import { Group, Image, Paper, SimpleGrid, Text } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconUser } from '@tabler/icons-react';

import { useState } from 'react';

interface IProps {
  onDrop: (files: FileWithPath[]) => void;
}

export default function ProfileDropzone(props: IProps) {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    );
  });

  return (
    <Group w='100%'>
      <div
        id='image-placeholder'
        className='w-16 h-16 border border-solid border-t-slate-300 rounded-full flex justify-center items-center overflow-hidden'
      >
        {previews.length > 0 ? previews : <IconUser size={18} />}
      </div>
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          setFiles(files);
          props.onDrop(files);
        }}
        className='text-center flex-1 cursor-pointer'
      >
        <Paper withBorder p='md'>
          <Text size='sm' fw='bold' inline>
            <span className='text-blue-700'>Click to upload</span> or drag and
            drop
          </Text>

          <Text size='xs' c='dimmed' inline mt={4}>
            Use a square image for best results
          </Text>
        </Paper>
      </Dropzone>
    </Group>
  );
}

/*export default function ProfileDropzone(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group gap='xl' style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            style={{
              width: rem(52),
              height: rem(52),
              color: 'var(--mantine-color-blue-6)',
            }}
            stroke={1.5}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            style={{
              width: rem(52),
              height: rem(52),
              color: 'var(--mantine-color-red-6)',
            }}
            stroke={1.5}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconUser
            style={{
              width: rem(52),
              height: rem(52),
              color: 'var(--mantine-color-dimmed)',
            }}
            stroke={1.5}
          />
        </Dropzone.Idle>

        <div className='text-center'>
          <Group gap={3}>
            <Text size='sm' fw='bold' c='blue' inline>
              Click to upload
            </Text>
            <Text size='sm' fw='bold' c='dimmed' inline>
              or drag and drop
            </Text>
          </Group>
          <Text size='xs' c='dimmed' inline mt={4}>
            Use a square image for best results
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}*/
