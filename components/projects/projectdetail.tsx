// pages/projects/projectDetail/[id].tsx
import { useRouter } from "next/router";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the project ID from the URL

  return (
    <div>
      <h1>Project Detail for Project ID: {id}</h1>
      {/* Add more details about the project here */}
    </div>
  );
};

export default ProjectDetail;