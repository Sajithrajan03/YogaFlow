"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Award, Calendar, Clock, Flame } from "lucide-react";

const data = [
  { name: "Week 1", minutes: 60 },
  { name: "Week 2", minutes: 90 },
  { name: "Week 3", minutes: 75 },
  { name: "Week 4", minutes: 120 },
];

const stats = [
  {
    label: "Practice Time",
    value: "345 mins",
    icon: Clock,
    color: "text-blue-500"
  },
  {
    label: "Sessions",
    value: "12",
    icon: Calendar,
    color: "text-green-500"
  },
  {
    label: "Streak",
    value: "5 days",
    icon: Flame,
    color: "text-orange-500"
  },
  {
    label: "Achievements",
    value: "8",
    icon: Award,
    color: "text-purple-500"
  }
];

export default function ProgressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Progress</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4">
            <div className="flex items-center gap-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Practice Time</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="minutes"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}