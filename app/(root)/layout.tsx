import { ReactNode } from 'react';
import Header from '@/components/shared/Header';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;
