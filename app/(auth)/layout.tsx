import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className='flex h-screen w-full flex-col items-center justify-center'>
      {children}
    </section>
  );
};

export default AuthLayout;
