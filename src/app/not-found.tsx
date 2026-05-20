import clsx from 'clsx';

export default function NotFoundPage() {
  return (
    <>
      <title>Página não encontrada!</title>
      <div
        className={clsx(
          'min-h-80 bg-slate-900 text-slate-100',
          'mb-16 p-8 rounded-xl',
          'flex items-center justify-center',
          'text-center',
        )}
      >
        <div>
          <h1 className='text-7xl/tight mb-4 font-extrabold'> ERRO 404</h1>
          <p>Erro 404 - Página inexistente.</p>
        </div>
      </div>
    </>
  );
}
