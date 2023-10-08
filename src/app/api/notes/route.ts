import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request): Promise<NextResponse> {
  const notes = await prisma.note.findMany();

  return NextResponse.json(notes);
}

export async function POST(req: Request) {
  const res = await req.json();
  const { title, content } = res;

  const result = await prisma.note.create({
    data: {
      title,
      content,
      published: true,
    },
  });

  return NextResponse.json({ result });
}
