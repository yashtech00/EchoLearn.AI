import { BrainCircuit, GitBranchPlus, TextWrapIcon } from "lucide-react"
import { Footer } from "@/components/ui/footer"

export const FooterSection = () => {
  return (
    <div className="w-full">
      <Footer
        logo={<BrainCircuit className="h-10 w-10 text-blue-400" />}
        brandName="EchoLearn.AI"
        socialLinks={[
          {
            icon: <TextWrapIcon className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <GitBranchPlus className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 EchoLearn.AI",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}
