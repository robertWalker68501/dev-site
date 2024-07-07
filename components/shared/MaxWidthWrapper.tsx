import { ReactNode } from 'react';

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
