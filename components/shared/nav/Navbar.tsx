'use client';

import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import SiteLogo from '@/components/shared/SiteLogo';
import { navLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNav from '@/components/shared/nav/MobileNav';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <MaxWidthWrapper>
      <nav className='flex-between py-4'>
        <div>
          <SiteLogo />
        </div>

        <div className='hidden items-center md:flex md:gap-4'>
          {navLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <Link
                key={link._id}
                href={link.route}
                className={`${isActive ? 'text-primary-500' : 'text-dark-900'} flex gap-2 text-sm transition-colors duration-300 hover:text-primary-500`}
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

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Link
              href='/sign-in'
              className={`text-sm transition-colors duration-300 hover:text-primary-500`}
            >
              Login
            </Link>
          </SignedOut>
        </div>

        {/* Mobile Nav */}
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
