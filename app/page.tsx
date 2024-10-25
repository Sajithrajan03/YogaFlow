import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Flame } from "lucide-react";
import { Heart } from "lucide-react";
import { LineChart } from "lucide-react";
import { Users } from "lucide-react";
import { LucideFlower2 } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Transform Your Practice
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience the perfect blend of traditional yoga and modern technology
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/poses">
                Start Practice <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50" asChild>
              <Link href="/routines">Explore Routines</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
          <LucideFlower2 className="w-12 h-12 mb-4 text-purple-600" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Pose Detection</h3>
          <p className="text-gray-600">
            Real-time feedback and pose correction using advanced AI
          </p>
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
          <Heart className="w-12 h-12 mb-4 text-pink-600" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Personalized Journey</h3>
          <p className="text-gray-600">
            Custom routines tailored to your goals and preferences
          </p>
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
          <LineChart className="w-12 h-12 mb-4 text-blue-600" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Progress Tracking</h3>
          <p className="text-gray-600">
            Visualize your improvement with detailed analytics
          </p>
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
          <Flame className="w-12 h-12 mb-4 text-orange-600" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Achievement System</h3>
          <p className="text-gray-600">
            Earn rewards and track your milestones
          </p>
        </Card>
        <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
          <Users className="w-12 h-12 mb-4 text-green-600" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Community Support</h3>
          <p className="text-gray-600">
            Connect with fellow practitioners
          </p>
        </Card>
      </section>
    </main>
  );
}