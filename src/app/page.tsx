import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
          <Image
            className='group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1024}
            height={768}
            alt='Título'
          />
        </Link>
        <div></div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
