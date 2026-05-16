import React from "react";
import { Component } from "@/components/ui/gradient-bars-background";

export default function Background({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Component
        numBars={20}
        gradientFrom="#4a7c59"
        gradientTo="transparent"
        animationDuration={2}
        backgroundColor="#faf6f0"
      >
        <div className="w-full">
          {children}
        </div>
      </Component>
    </>
  );
}