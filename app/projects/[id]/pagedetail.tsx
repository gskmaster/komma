"use client";

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Header } from "@/components/headerproject";



interface ProjectDetailProps {
  params: {
    id: string;
  };
}

// Sample project data
const projectData = {
  "1": {
    title: "ARKAGAIA PRESENTS: 3 DIMENSI",
    subtitle: "MORAL, STUDIO MORAL AND INFUTURA RUNWAY SHOW & FASHION PRESENTATION",
    description: "Arkagaia, the company behind notable fashion brands namely MORAL, STUDIOMORAL, and inFUTURA, appointed us as the official organizer for their annual fashion presentations, powered by Intel Indonesia.",
    services: ["Offline event", "Booth & Space Production", "Media Relations"],
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    ],
  },
  // Add more project data for other IDs as needed
};

export async function generateStaticParams() {
  const projectIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  return projectIds.map((id) => ({ id }));
}

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const { id } = params; // Access the project ID from params
  const project = projectData[1]; // Get the project data based on the ID
  const router = useRouter(); // Initialize the router

  if (!project) {
    return <div>Project not found</div>; // Handle case where project data is not found
  }

  return (
    <div className="bg-[#0A0B1A] text-white min-h-screen">
      {/* Use the existing Header component */}
      <Header /> 

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Flex Container for Back Button and Project Details */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
          {/* Left Side: Back Button */}
          <div className="flex-1 mb-4 md:mb-0 md:w-1/2">
            <button onClick={() => router.push('/')} className="text-white text-2xl font-light flex items-center gap-2">
              ← Project Highlight
            </button>
          </div>

          {/* Right Side: Project Title and Description */}
          <div className="flex-2 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <h2 className="text-xl font-light mb-4">{project.subtitle}</h2>
            <p className="text-lg font-light mb-4">{project.description}</p>
            <h3 className="text-lg font-semibold mb-2">Services Included:</h3>
            <p className="text-lg font-light">
              {project.services.join(", ")}
            </p>
          </div>
        </div>

        {/* Carousel for Images - Full Width at the Bottom */}
        <div className="w-full mt-12 relative">
          <Carousel className="w-full">
            <CarouselPrevious />
            <CarouselNext />
            <CarouselContent className="flex gap-2">
              {project.images.map((image, index) => (
                <CarouselItem key={index} className="flex-1 basis-1/3">
                  <img
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
