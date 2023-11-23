import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  return {
    title: `${params.username} | Linkleaf`,
  };
}

export default function Page({ params }: { params: { username: string } }) {
  return <div>Username: {params.username}</div>;
}
