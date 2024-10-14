import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { getProjects, IProject } from "@/api/projects";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/common/Loader";
 
export function ProjectSelect({userId, handleSelect, defaultValue}: {userId: string | undefined, handleSelect: Function, defaultValue: string | undefined }) {
 
  console.log(['projects' + userId], )
  const { data, isLoading } = useQuery({
    queryFn: async () => await getProjects(userId),
    queryKey:["projects" + userId],
    staleTime: 1000,
  });


  if(isLoading) return <Loader isLoading={isLoading} />;


  return (
    <Select onValueChange={handleSelect} defaultValue={defaultValue}>
      <SelectTrigger className="w-[180px] mx-3">
        <SelectValue placeholder="Select a project" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {
            data?.map((project : IProject )=> <SelectItem key={project.id} value={project.id}>{project.name}</SelectItem>)
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}