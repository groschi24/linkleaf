'use client';

import { Button } from '@mantine/core';
import { useRouter } from 'next/navigation';

interface IProps {
  noteId: string;
}

export default function DeleteNote(props: IProps) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/notes/${props.noteId}`, {
        method: 'DELETE',
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return <Button onClick={handleClick}>Delete Post</Button>;
}
