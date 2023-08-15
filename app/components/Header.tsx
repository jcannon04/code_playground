import Link from "next/link";
const Header = () => {
  return (
    <nav className='bg-black p-2 mb-4 flex justify-between items-center'>
      <div className='flex items-center'>
        {/* Logo */}
        <Link href='/'>
          <div className='text-white text-lg font-bold'>Logo</div>
        </Link>
      </div>
      <div className='space-x-4'>
        {/* Sign Up */}
        <a href='#' className='text-white'>
          Sign Up
        </a>
        {/* Log In */}
        <a href='#' className='text-white'>
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Header;
