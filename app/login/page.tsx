"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">Login</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="pl-10 py-3 border border-gray-300 rounded-lg w-full focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white py-3 rounded-lg font-semibold shadow-lg" onClick={() => router.push("/dashboard")}>
            Login
          </Button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-purple-500 font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
