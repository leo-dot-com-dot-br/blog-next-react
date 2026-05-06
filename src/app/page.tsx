import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </div>
  );
}
