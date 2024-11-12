"use client";

import { useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  url: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "ARKAGAIA",
    subtitle: "3 Dimensi",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/1" // Update to include project ID
  },
  {
    id: 2,
    title: "LANEIGE",
    subtitle: "Beauty Campaign",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/2"
  },
  {
    id: 3,
    title: "SWATCH",
    subtitle: "Product Launch",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/3"
  },
  {
    id: 4,
    title: "BOSS",
    subtitle: "Fashion Show",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/4"
  },
  {
    id: 5,
    title: "MONCLER",
    subtitle: "Winter Collection",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/5"
  },
  {
    id: 6,
    title: "COFFEE SHOP",
    subtitle: "Brand Activation",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/6"
  },
  {
    id: 7,
    title: "SIAL",
    subtitle: "Exhibition",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/7"
  },
  {
    id: 8,
    title: "YSL",
    subtitle: "Beauty Launch",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/8"
  },
  {
    id: 9,
    title: "SPOTIFY",
    subtitle: "Music Event",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/9"
  },
  {
    id: 10,
    title: "H&M",
    subtitle: "Summer Collection",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/10"
  },
  {
    id: 11,
    title: "TUMI",
    subtitle: "Product Launch",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/11"
  },
  {
    id: 12,
    title: "JO MALONE",
    subtitle: "Fragrance Launch",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
    url: "/projects/projectDetail/12"
  }
];

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [newlyLoadedProjects, setNewlyLoadedProjects] = useState<number[]>([]);
  const router = useRouter();

  const loadMoreProjects = () => {
    setIsLoading(true);
    const currentCount = visibleProjects;
    const newCount = Math.min(currentCount + 4, projectsData.length);

    // Simulate loading delay
    setTimeout(() => {
      const newProjectIds = projectsData
        .slice(currentCount, newCount)
        .map(project => project.id);

      setVisibleProjects(newCount);
      setNewlyLoadedProjects(newProjectIds);
      setIsLoading(false);

      // Clear the newly loaded projects after animation
      setTimeout(() => {
        setNewlyLoadedProjects([]);
      }, 1000);
    }, 800);
  };

  return (
    <section id="projects" className="relative bg-gradient-to-b from-[#0A0B1A] to-[#141B33] text-white min-h-screen h-screen py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-light mt-16 mb-16 text-center tracking-wider">
          PROJECTS
        </h2>

        <div className="w-full max-w-[80%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {projectsData.slice(0, visibleProjects).map((project) => (
              <div
                key={project.id}
                className={cn(
                  "group relative aspect-square overflow-hidden bg-gray-900 transform transition-all duration-500",
                  newlyLoadedProjects.includes(project.id) && "animate-fadeIn"
                )}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3
                    className="text-xl font-light tracking-wider text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => router.push(`/projects/${project.id}`)} // Navigate to the project detail page
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/80 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={() => router.push(`/projects/${project.id}`)}>
                    {project.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {visibleProjects < projectsData.length && (
            <div className="flex flex-col items-center mt-12">
              <Button
                onClick={loadMoreProjects}
                disabled={isLoading}
                variant="ghost"
                className="text-white/60 hover:text-white hover:bg-transparent transition-colors flex flex-col items-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="h-6 w-6 animate-spin" />
                ) : (
                  <>
                    <span className="uppercase tracking-wider">See More</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}