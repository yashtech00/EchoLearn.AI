"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

import { login, register, googleAuth } from "@/app/api/auth/auth_api";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      let response;
      
      if (isSignUp) {
        // Handle signup
        response = await register(name, email, password);
      } else {
        // Handle login
        response = await login(email, password);
      }

      if (response.accessToken) {
        // Store token
        localStorage.setItem("token", response.accessToken);
        
        // Redirect based on isNewUser
        if (response.user?.isNewUser) {
          router.replace("/UserProfile");
        } else {
          router.replace("/Dashboard");
        }
      } else {
        setError(response.message || (isSignUp ? "Registration failed" : "Invalid credentials"));
      }
    } catch (err) {
      setError(isSignUp ? "Registration failed. Please try again." : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setGoogleLoading(true);
    setError("");

    try {
      const response = await googleAuth();

      if (response?.url) {
        window.location.href = response.url;
      } else {
        setError("Google login failed.");
      }
    } catch (err) {
      setError("Google authentication failed.");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md rounded-2xl shadow-md border bg-background">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">
            {isSignUp ? "Create Account" : "Sign In"}
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            {isSignUp ? "Sign up to get started" : "Welcome back! Please sign in"}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name field - only show for signup */}
          {isSignUp && (
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <div className="flex items-center gap-2 border rounded-lg px-3 h-12 focus-within:ring-2 focus-within:ring-ring">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="border-0 shadow-none focus-visible:ring-0"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <div className="flex items-center gap-2 border rounded-lg px-3 h-12 focus-within:ring-2 focus-within:ring-ring">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border-0 shadow-none focus-visible:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="flex items-center gap-2 border rounded-lg px-3 h-12 focus-within:ring-2 focus-within:ring-ring">
              <Lock className="h-5 w-5 text-muted-foreground" />

              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="border-0 shadow-none focus-visible:ring-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember me & Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) =>
                  setRememberMe(checked === true)
                }
              />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me
              </Label>
            </div>

            <button
              type="button"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Error / Success */}
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          {success && (
            <p className="text-sm text-green-500">{success}</p>
          )}

          {/* Submit */}
          <Button
            type="submit"
            variant="default"
            className="w-full h-12 text-base font-medium rounded-lg"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              isSignUp ? "Sign Up" : "Sign In"
            )}
          </Button>

          {/* Google Login */}
          <div className="flex flex-col gap-3 mt-2">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 rounded-lg flex items-center justify-center gap-3"
              onClick={handleGoogleAuth}
              disabled={googleLoading}
            >
              {googleLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Image
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                  Continue with Google
                </>
              )}
            </Button>
          </div>

          {/* Mode Toggle */}
          <p className="text-center text-sm text-muted-foreground mt-2">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span 
              className="text-primary cursor-pointer hover:underline"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
                setSuccess("");
              }}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}