import { Brain, Link2, Mail } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-primary/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <h2 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                EchoLearn<span className="text-primary group-hover:text-accent transition-colors">.AI</span>
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              A calm, organic approach to mastering English. Powered by AI, designed for humans.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <Link2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <Link2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <Link2 className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Explore</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="/LandingPages/Program">Our Programs</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="/LandingPages/Blogs">Learning Blog</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="/LandingPages/AboutUs">The Story</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="#">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Company</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="#">Privacy Policy</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="#">Terms of Service</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="#">Cookie Policy</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="#">Ethics in AI</Link>
              </li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Stay Connected</h4>
            <p className="text-sm text-muted-foreground mb-6">
              Get weekly insights on language mastery and AI learning.
            </p>
            <div className="flex gap-2 p-1.5 rounded-[12px] bg-primary/5 border border-primary/10">
              <input 
                type="email" 
                placeholder="you@email.com"
                className="bg-transparent border-none focus:ring-0 text-sm px-3 flex-1 text-foreground placeholder:text-muted-foreground/50"
              />
              <button className="bg-primary text-white p-2 rounded-[8px] hover:bg-primary/90 transition-colors shadow-sm">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-primary/5 flex flex-col md:row items-center justify-between gap-6 text-sm text-muted-foreground font-medium">
          <p>© 2025 EchoLearn AI. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" /> System Active
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" /> Cloud Synced
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
