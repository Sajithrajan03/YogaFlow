"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { User, Lock, Mail } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-6">Sign Up</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500" />
              <Input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500" />
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-500" />
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:border-pink-500 focus:ring-pink-500"
              />
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white py-3 rounded-lg font-semibold shadow-lg" onClick={() => router.push("/dashboard")}>
            Sign Up
          </Button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-pink-500 font-semibold hover:underline">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
