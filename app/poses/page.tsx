"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Define the Pose type
type Pose = {
  name: string;
  difficulty: string;
  image: string;
  description: string;
  benefits: string;
};

export const poses: Pose[] = [
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
  {
    name: "Child's Pose",
    difficulty: "Beginner",
    image: "https://www.theyogacollective.com/wp-content/uploads/2019/10/4143473057707883372_IMG_8546-2-1200x800.jpg",
    description: "A resting pose that gently stretches the back and hips.",
    benefits: "Relieves tension in the spine, calms the mind, stretches hips and thighs.",
  },
  {
    name: "Crow Pose",
    difficulty: "Advanced",
    image: "https://beyogi.com/wp-content/uploads/2015/03/Crow-Pose-Bakasana.png",
    description: "A challenging arm balance that builds core and upper body strength.",
    benefits: "Strengthens arms and wrists, improves balance and focus.",
  },
  {
    name: "Camel Pose",
    difficulty: "Intermediate",
    image: "https://beyogi.com/wp-content/uploads/2015/04/Camel-Pose-Ustrasana.png",
    description: "A deep backbend that stretches the entire front body.",
    benefits: "Opens chest and shoulders, improves flexibility in the spine, relieves fatigue.",
  },
];

export default function PosesPage() {
  // Set selectedPose to be either null or a Pose object
  const [selectedPose, setSelectedPose] = useState<Pose | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Yoga Poses Library</h1>
        <div className="relative w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search poses..." className="pl-8" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {poses.map((pose) => (
          <Card key={pose.name} className="overflow-hidden">
            <img
              src={pose.image}
              alt={pose.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{pose.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {pose.difficulty}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">{pose.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="w-full"
                    onClick={() => setSelectedPose(pose)} // No error now
                  >
                    Learn More
                  </Button>
                </DialogTrigger>
                {selectedPose && (
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{selectedPose.name}</DialogTitle>
                    </DialogHeader>
                    <img
                      src={selectedPose.image}
                      alt={selectedPose.name}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-lg mb-2">{selectedPose.description}</p>
                    <p className="text-muted-foreground mb-4">
                      Difficulty: {selectedPose.difficulty}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Benefits: {selectedPose.benefits}
                    </p>
                    <Button className="w-full" onClick={() => setSelectedPose(null)}>
                      Close
                    </Button>
                  </DialogContent>
                )}
              </Dialog>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
