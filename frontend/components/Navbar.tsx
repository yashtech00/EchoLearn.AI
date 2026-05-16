import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="w-full backdrop-blur-md fixed top-0 z-50 border-b border-primary/5 bg-background/80">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-serif font-bold text-foreground tracking-tight flex items-center gap-1">
            EchoLearn<span className="text-primary transition-colors group-hover:text-accent">.AI</span>
          </h1>
        </Link>

        {/* Center Nav Links */}
        <ul className="hidden md:flex gap-10 text-muted-foreground font-sans font-medium">
          <li className="hover:text-primary cursor-pointer transition-colors">
            <Link href="/LandingPages/Program">Programs</Link>
          </li>
          <li className="hover:text-primary cursor-pointer transition-colors">
            <Link href="/LandingPages/Blogs">Blog</Link>
          </li>
          <li className="hover:text-primary cursor-pointer transition-colors">
            <Link href="/LandingPages/AboutUs">About Us</Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button variant="ghost" className="font-sans font-semibold text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-[12px]">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button className="bg-primary hover:bg-primary/90 text-white font-sans font-bold px-6 rounded-[12px] shadow-terra transition-all hover:scale-[1.02]">
              Join Now
            </Button>
          </Link>
        </div>

      </div>
    </nav>
  );
};