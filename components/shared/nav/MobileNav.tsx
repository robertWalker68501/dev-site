import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FiMenu } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import SiteLogo from '@/components/shared/SiteLogo';
import { Separator } from '@/components/ui/separator';
import { navLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const MobileNav = () => {
  const [openSheet, setOpenSheet] = useState(false);

  const pathname = usePathname();

  return (
    <Sheet
      open={openSheet}
      onOpenChange={setOpenSheet}
    >
      <SheetTrigger asChild>
        <FiMenu className='size-6 cursor-pointer' />
      </SheetTrigger>
      <SheetContent className='bg-light-200'>
        <SiteLogo
          onClick={() => {
            setOpenSheet(false);
          }}
        />

        <Separator className='mt-5 border-b border-gray-300' />

        <div className='mt-5 flex flex-col gap-4'>
          {navLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <Link
                key={link._id}
                href={link.route}
                className={`${isActive ? 'text-primary-500' : 'text-dark-900'} base-medium flex transition-colors duration-300 hover:text-primary-500`}
                onClick={() => {
                  setOpenSheet(false);
                }}
              >
                {link.iconUrl && (
                  <Image
                    src={link.iconUrl}
                    alt={link.iconAlt}
                    width={20}
                    height={20}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
