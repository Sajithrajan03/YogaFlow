"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Dumbbell } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog";

const routines = [
  {
    title: "Morning Flow",
    duration: "20 min",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60",
    description: "Start your day with energizing poses and mindful breathing.",
    benefits: "Improves energy, focus, and flexibility for the day."
  },
  {
    title: "Strength Builder",
    duration: "45 min",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&auto=format&fit=crop&q=60",
    description: "Build strength and stability with challenging pose sequences.",
    benefits: "Increases muscle tone, improves stamina, builds core strength."
  },
  {
    title: "Relaxation Flow",
    duration: "30 min",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60",
    description: "Unwind and destress with gentle movements and meditation.",
    benefits: "Relieves stress, improves relaxation, and calms the mind."
  }
];

export default function RoutinesPage() {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Start the timer
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      setIsPaused(false);
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000); // Increment the timer every second
    }
  };

  // Pause the timer
  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsPaused(true);
    setIsRunning(false);
  };

  // Stop the timer and reset
  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsPaused(false);
    setTimer(0); // Reset the timer
  };

  // Format the time to mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-700">Yoga Routines</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routines.map((routine) => (
          <Card key={routine.title} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={routine.image}
              alt={routine.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{routine.title}</h3>
              <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-blue-500" />
                  {routine.duration}
                </div>
                <div className="flex items-center">
                  <Dumbbell className="w-4 h-4 mr-1 text-purple-500" />
                  {routine.level}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{routine.description}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white shadow-md" onClick={() => setSelectedRoutine(routine)}>
                    Start Routine
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle className="text-2xl font-bold mb-4 text-pink-600">
                    {routine.title}
                  </DialogTitle>
                  <div className="mb-4">
                    <p className="text-muted-foreground text-lg mb-2">{routine.description}</p>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center text-purple-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {routine.duration}
                      </div>
                      <div className="flex items-center text-purple-500">
                        <Dumbbell className="w-4 h-4 mr-1" />
                        {routine.level}
                      </div>
                    </div>
                  </div>
                  <div className="text-md font-medium mb-6">
                    <span className="text-pink-500">Benefits:</span> {routine.benefits}
                  </div>

                  {/* Timer Display */}
                  <div className="text-center text-xl font-bold mb-4">
                    Time Elapsed: {formatTime(timer)}
                  </div>

                  {/* Timer Controls */}
                  <div className="flex gap-4 justify-center mb-4">
                    <Button onClick={handleStart} disabled={isRunning} className="bg-green-500 hover:bg-green-600 text-white">
                      {isPaused ? "Resume" : "Start"}
                    </Button>
                    <Button onClick={handlePause} disabled={!isRunning} className="bg-yellow-500 hover:bg-yellow-600 text-white">
                      Pause
                    </Button>
                    <Button onClick={handleStop} disabled={!isRunning && !isPaused} className="bg-red-500 hover:bg-red-600 text-white">
                      Stop
                    </Button>
                  </div>

                  <DialogFooter>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white shadow-md">
                      End Routine
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
