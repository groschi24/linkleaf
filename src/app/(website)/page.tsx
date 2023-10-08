import prisma from '@/lib/prisma';
import AddNote from '../ui/website/addNote';

async function getNotes() {
  const notes = await prisma.note.findMany({
    where: { published: true },
  });
  return notes;
}

export default async function Home() {
  const notes = await getNotes();

  return (
    <main>
      <p>Home</p>

      <AddNote />

      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </main>
  );
}
