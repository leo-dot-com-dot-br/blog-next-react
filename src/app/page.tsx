import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: `#`,
          }}
          imageProps={{
            alt: 'Título',
            width: 1200,
            height: 720,
            src: '/images/bryen_8.png',
            priority: true,
          }}
        />
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2026-05-12'
          >
            12/05/2026
          </time>
          <PostHeading as='h1' url='#'>
            Título
          </PostHeading>
          <p>Post</p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </Container>
  );
}
