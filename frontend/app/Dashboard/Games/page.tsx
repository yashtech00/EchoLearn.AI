"use client"

import ComingSoon from "@/components/Dashboard/ComingSoon";
import { Trophy } from "lucide-react";

export default function GamesPage() {
    return (
        <ComingSoon 
            title="Interactive Learning Games" 
            description="We're crafting immersive, AI-powered games to help you master English through play. From vocabulary challenges to grammar puzzles, fun is on the way."
            icon={Trophy}
        />
    );
}