"use client"

import ComingSoon from "@/components/Dashboard/ComingSoon";
import { Sparkles } from "lucide-react";

export default function PlaygroundPage() {
    return (
        <ComingSoon 
            title="AI Creative Playground" 
            description="A dedicated space to experiment with language, explore new styles, and push your creative boundaries with our most advanced AI models."
            icon={Sparkles}
        />
    );
}