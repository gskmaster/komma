import { useRouter } from "next/navigation";

interface ProjectDetailProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  // Specify all possible project IDs that should be statically generated
  const projectIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  
  return projectIds.map((id) => ({ id }));
}

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const { id } = params; // Access the project ID from params

  return (
    <div>
      <h1>Project Detail for Project ID: {id}</h1>
      {/* Add more details about the project here */}
    </div>
  );
};

export default ProjectDetail;
