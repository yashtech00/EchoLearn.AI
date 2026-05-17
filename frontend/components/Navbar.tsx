"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full backdrop-blur-md fixed top-0 z-50 border-b border-primary/5 bg-background/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="group flex-shrink-0">
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-foreground tracking-tight flex items-center gap-1">
            EchoLearn<span className="text-primary transition-colors group-hover:text-accent">.AI</span>
          </h1>
        </Link>

        {/* Center Nav Links - Desktop */}
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

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Hamburger Toggle - Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <Link href="/auth/login" className="sm:hidden">
            <Button size="sm" className="bg-primary text-white font-sans font-bold px-3 py-1.5 text-xs rounded-[10px]">
              Join
            </Button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-primary/5 transition-all"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-primary/5 px-6 py-6 space-y-6 shadow-xl transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
        }`}
      >
        <ul className="flex flex-col gap-4 text-foreground font-sans font-semibold text-lg">
          <li className="hover:text-primary cursor-pointer transition-colors py-2 border-b border-primary/5">
            <Link href="/LandingPages/Program" onClick={() => setIsOpen(false)}>Programs</Link>
          </li>
          <li className="hover:text-primary cursor-pointer transition-colors py-2 border-b border-primary/5">
            <Link href="/LandingPages/Blogs" onClick={() => setIsOpen(false)}>Blog</Link>
          </li>
          <li className="hover:text-primary cursor-pointer transition-colors py-2 border-b border-primary/5">
            <Link href="/LandingPages/AboutUs" onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
        </ul>

        <div className="flex flex-col gap-3 pt-2">
          <Link href="/auth/login" onClick={() => setIsOpen(false)} className="w-full">
            <Button variant="outline" className="w-full font-sans font-bold text-muted-foreground border-primary/10 hover:text-primary hover:bg-primary/5 py-5 rounded-[12px]">
              Sign In
            </Button>
          </Link>
          <Link href="/auth/login" onClick={() => setIsOpen(false)} className="w-full">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-sans font-bold py-5 rounded-[12px] shadow-terra">
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};