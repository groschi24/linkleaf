import prisma from '@/lib/prisma';
import AddNote from '../ui/website/addNote';
import DeleteNote from '../ui/website/deleteNote';
import { Card } from '@mantine/core';

async function getNotes() {
  const notes = await prisma.note.findMany({
    where: { published: true },
  });
  return notes;
}

export default async function Home() {
  const notes = await getNotes();

  return (
    <main className='p-8'>
      <AddNote />

      {notes.map((note) => (
        <Card mt='md' key={note.id} withBorder>
          <p>{note.title}</p>
          <p>{note.content}</p>
          <DeleteNote noteId={note.id} />
        </Card>
      ))}
    </main>
  );
}
