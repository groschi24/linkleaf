import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  const id = params.id;

  const note = await prisma.note.findUnique({ where: { id: id } });

  return NextResponse.json(note);
}
