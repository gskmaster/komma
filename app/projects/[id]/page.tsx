// kommaproject/komma/app/projects/[id]/page.tsx
import ProjectDetail from './pagedetail'; // Import the Client Component

export async function generateStaticParams() {
  const projectIds = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  return projectIds.map((id) => ({ id }));
}

const Page = ({ params }) => {
  return (
        <ProjectDetail params={params} />
    );
};

export default Page;