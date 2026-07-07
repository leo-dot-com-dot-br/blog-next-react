import { InputText } from '@/components/InputText';

export const dynamic = 'force-dynamic';

export default async function AdminPostNewPage() {
  return (
    <div className='flex flex-col gap-6'>
      <InputText labelText='' placeholder='Digite seu nome' />
      <InputText labelText='' placeholder='Digite seu sobrenome' />
    </div>
  );
}
