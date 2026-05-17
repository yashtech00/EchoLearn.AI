"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#faf6f0] text-[#2e3230]">
      <div className="max-w-md w-full p-8 border border-[#4a7c59]/20 rounded-2xl bg-[#faf6f0] shadow-terra text-center">
        <h2 className="text-2xl font-bold mb-4 font-serif">Create Account</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Signup is currently disabled. Please use the login page to access your account.
        </p>
        <Link 
          href="/auth/login" 
          className="inline-block px-6 py-3 bg-[#4a7c59] hover:bg-[#3d6649] text-[#faf6f0] rounded-[12px] font-semibold transition-all"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
