import Image from 'next/image';
import Link from 'next/link';

interface SiteLogoProps {
  onClick?: () => void;
}

const SiteLogo = ({ onClick }: SiteLogoProps) => {
  return (
    <Link
      href='/'
      className='flex items-center gap-2 text-lg font-bold'
      onClick={onClick}
    >
      <Image
        src='/assets/icons/logo-icon.svg'
        alt='logo'
        width={22}
        height={20}
      />
      NovaWeb Solutions
    </Link>
  );
};

export default SiteLogo;
