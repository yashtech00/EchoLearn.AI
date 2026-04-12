import React from "react";
import { Component } from "@/components/ui/gradient-bars-background";
import { MynaHero } from "./ui/myna-hero";

export default function Background() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      />
      <style>{`
        .font-modern {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      <Component
        numBars={20}
        gradientFrom="#009ccbff"
        gradientTo="transparent"
        animationDuration={2}
        backgroundColor="#ffffff"
      >
        {/* Center Info */}
        <div className="text-center font-modern">
          {/* <h1 className="text-gray-900 text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            English IQ
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            AI-powered Learning Companion
          </p> */}
          <MynaHero/>
        </div>
      </Component>
    </>
  );
}