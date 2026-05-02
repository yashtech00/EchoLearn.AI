import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full  backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          EchoLearn<span className="text-secondary">.AI</span>
        </h1>

        {/* Center Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-semibold">
          <li className="hover:text-secondary cursor-pointer transition">
            Programs
          </li>
          <li className="hover:text-secondary cursor-pointer transition">
            Blog
          </li>
          <li className="hover:text-secondary cursor-pointer transition">
            About Us
          </li>
        </ul>

        {/* Auth Buttons */}
        <Link href="/pages/Auth/SignIn">
        <div className="flex items-center gap-4">
          <button className="border-2 border-black rounded-full px-4 py-2 text-gray-600 hover:text-white hover:bg-black  transition">
            Sign In 
          </button>
        </div>
        </Link>

      </div>
    </nav>
  );
};