"use client"

import { getProjects, IProject } from "@/api/projects";
import ProjectCard from "./ProjectCard";
import Heading from "@/components/common/Heading";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/common/Loader";

export default function Projects() {

  const { data: projects, isLoading } = useQuery({
    queryFn: async () => await getProjects(undefined),
    queryKey: ["project "],
  });


  return (
    <>
      <Heading title="Projects" />
      <div className="grid grid-cols-3 gap-4">
        {
          isLoading ? <Loader isLoading={isLoading} /> : ''
        }
        {
           projects?.map((project: IProject, index: number) => {
            return <ProjectCard key={"project_" + index} project={project} />
          })
        }
      </div>
    </>
  )
}
