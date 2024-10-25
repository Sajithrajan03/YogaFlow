"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { UploadCloud } from "lucide-react";

const poses = [
  {
    name: "Downward-Facing Dog",
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
    description: "A foundational yoga pose that stretches and strengthens the entire body.",
    benefits: "Improves flexibility, strengthens arms and legs, relieves stress.",
  },
  {
    name: "Warrior I",
    difficulty: "Beginner",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&auto=format&fit=crop&q=60",
    description: "A standing pose that builds strength and stability in the legs.",
    benefits: "Increases stamina, improves concentration, strengthens shoulders.",
  },
  {
    name: "Tree Pose",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",
    description: "A balancing pose that improves focus and stability.",
    benefits: "Enhances posture, strengthens legs, improves focus.",
  },
];

export default function YogaPoseDetectionPage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [poseResult, setPoseResult] = useState<{
    name: string;
    difficulty: string;
    image: string;
    description: string;
    benefits: string;
    accuracy: number;
  } | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
      detectYogaPose(); // Trigger pose detection on file change
    }
  };

  // Simulate yoga pose detection by picking a random pose from the list
  const detectYogaPose = () => {
    const randomPose = poses[Math.floor(Math.random() * poses.length)];
    const randomAccuracy = Math.floor(Math.random() * (100 - 80 + 1)) + 80; // Random accuracy between 80% and 100%
    setPoseResult({ ...randomPose, accuracy: randomAccuracy });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Yoga Pose Detection</h1>

      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Image Upload Section */}
        <Card className="p-6 w-full max-w-md text-center">
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected Yoga Pose"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
          ) : (
            <div className="text-muted-foreground mb-4">
              <UploadCloud className="w-12 h-12 mx-auto" />
              <p>Select an image of your yoga pose</p>
            </div>
          )}
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-4"
          />
          <Button onClick={detectYogaPose} disabled={!selectedImage}>
            Detect Pose
          </Button>
        </Card>

        {/* Display Results Section */}
        {poseResult && (
          <Card className="p-6 w-full max-w-md text-center space-y-4">
            <img
              src={poseResult.image}
              alt={poseResult.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{poseResult.name}</h2>
            <p className="text-sm text-muted-foreground">{poseResult.difficulty}</p>
            <p className="text-muted-foreground mb-4">{poseResult.description}</p>
            <p className="text-muted-foreground mb-4 font-semibold">Benefits: {poseResult.benefits}</p>
            <p className="text-muted-foreground mb-4 font-semibold">Accuracy: {poseResult.accuracy}%</p>
            <Progress value={poseResult.accuracy} className="w-full" />
          </Card>
        )}
      </div>
    </div>
  );
}
