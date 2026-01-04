import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className='py-3 px-4 text-[#ADB7BE] text-sm rounded md:p-0 hover:text-white min-h-[44px] flex items-center'
    >
      {title}
    </Link>
  );
};

export default NavLink;
