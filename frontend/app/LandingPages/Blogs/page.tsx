"use client";

import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/landingPage/Footer";
import { motion } from "framer-motion";
import { 
  Search, 
  ArrowRight, 
  Clock, 
  Tag, 
  PenTool, 
  MessageCircle,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogsPage() {
  const posts = [
    {
      title: "The Art of the Professional Email: Beyond 'I hope this finds you well'",
      excerpt: "Master the subtle art of tone and structure in high-stakes workplace communication.",
      date: "May 12, 2024",
      readTime: "6 min read",
      category: "Workplace",
      icon: MessageCircle
    },
    {
      title: "Why Thinking in English is Better Than Translating",
      excerpt: "Exploring the cognitive shifts needed to achieve true fluency and natural response times.",
      date: "May 10, 2024",
      readTime: "8 min read",
      category: "Psychology",
      icon: TrendingUp
    },
    {
      title: "Mastering the Nuance: C1 vs C2 Proficiency",
      excerpt: "A deep dive into the subtle differences that define native-like English mastery.",
      date: "May 08, 2024",
      readTime: "10 min read",
      category: "Advanced",
      icon: PenTool
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="pt-40 pb-24 px-6">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Tag className="w-3.5 h-3.5 text-accent" />
              Learning Blog
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Insights for the <span className="text-primary italic">serious</span> <br />
              language <span className="text-accent italic">thinker</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Thoughtful articles on language acquisition, AI-driven learning, 
              and the psychology of communication.
            </p>
          </motion.div>
        </section>

        {/* Search & Filter */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="flex flex-col md:row gap-4 items-center bg-card rounded-[20px] p-4 shadow-terra border border-primary/5">
            <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-[12px] bg-primary/5 border border-primary/5 w-full">
              <Search className="w-5 h-5 text-primary/40" />
              <input 
                type="text" 
                placeholder="Search insights..."
                className="bg-transparent border-none focus:ring-0 text-foreground placeholder:text-muted-foreground/50 w-full font-medium"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {["All", "Workplace", "Psychology", "Advanced"].map((cat) => (
                <button 
                  key={cat}
                  className={`px-6 py-2 rounded-[12px] text-sm font-bold transition-all whitespace-nowrap ${
                    cat === "All" 
                      ? "bg-primary text-white shadow-sm" 
                      : "bg-primary/5 text-primary hover:bg-primary/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-[24px] overflow-hidden shadow-terra border border-primary/5 hover:border-primary/20 transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="h-56 bg-primary/5 flex items-center justify-center relative group-hover:bg-primary/10 transition-colors">
                <post.icon className="w-16 h-16 text-primary opacity-20 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur rounded-[8px] text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm border border-primary/10">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Newsletter / CTA */}
        <section className="max-w-4xl mx-auto text-center bg-accent/5 rounded-[32px] p-12 md:p-20 border border-accent/10 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Never miss a <span className="text-primary italic">thought</span>.</h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join 10,000+ learners who receive our weekly insights on English 
              mastery and cognitive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-[12px] bg-white border border-primary/10 focus:ring-2 focus:ring-primary/20 transition-all font-medium text-foreground"
              />
              <Button className="px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-[12px] font-bold shadow-terra">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mt-16 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mb-16 blur-2xl" />
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
