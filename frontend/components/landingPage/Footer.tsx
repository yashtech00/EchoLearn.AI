import { ArrowRight, BarChart3, Brain, PenTool, UserRoundCheck } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  const platformLinks = [
    {
      label: "Platform",
      href: "/LandingPages/Platform",
      icon: BarChart3,
    },
    {
      label: "Writing Intelligence",
      href: "/LandingPages/WritingIntelligence",
      icon: PenTool,
    },
    {
      label: "Personalized Learning",
      href: "/LandingPages/PersonalizedLearning",
      icon: UserRoundCheck,
    },
  ];

  return (
    <footer className="bg-background border-t border-primary/5 pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr_0.9fr] gap-10 lg:gap-14 mb-14 sm:mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <h2 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                EchoLearn<span className="text-primary group-hover:text-accent transition-colors">.AI</span>
              </h2>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              AI-powered English writing practice with personalized feedback, mistake memory, and measurable progress.
            </p>
            <div className="inline-flex items-center gap-2 rounded-[12px] bg-primary/5 border border-primary/10 px-4 py-2 text-sm font-bold text-primary">
              <Brain className="w-4 h-4 text-accent" />
             Learning platform
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Product</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {platformLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 rounded-[12px] border border-primary/10 bg-card px-4 py-4 text-foreground hover:border-primary/25 hover:bg-primary/5 transition-all"
                  >
                    <span className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </span>
                    <span className="font-bold text-sm">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Access</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="/auth/login">Sign In</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="/auth/login">Start Assessment</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="/Dashboard">Dashboard</Link>
              </li>
            </ul>
            <Link
              href="/auth/login"
              className="mt-6 inline-flex items-center gap-2 rounded-[12px] bg-primary px-5 py-3 text-sm font-bold text-white shadow-terra hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-10 border-t border-primary/5 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-muted-foreground font-medium">
          <p>© 2026 EchoLearn AI. learning platform.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" /> Writing Coach
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" /> Personalized Learning
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
