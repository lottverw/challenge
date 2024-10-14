"use client"

import {IProject, getProjects} from "@/api/projects";
import ProjectCard from "./ProjectCard";
import Heading from "@/components/common/Heading";
import { useQuery } from "@tanstack/react-query";

export default function Projects() {

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getProjects(),
    queryKey: ["projects"],
  });


  return (
    <>
      <Heading title="Projects" />
    <div className="grid grid-cols-3 gap-4">       
       {
          data?.map((project, index) => {
            return <ProjectCard key={"project_" + index} project={project} />
          })
        }
        </div>
      </>
  )
}
