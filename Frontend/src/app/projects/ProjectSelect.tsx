import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { getProjects } from "@/api/projects";
import { useQuery } from "@tanstack/react-query";
 
export function ProjectSelect({userId, handleSelect, defaultValue}: {userId: string | undefined, handleSelect: Function, defaultValue: string | undefined }) {
 
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getProjects(userId),
    queryKey: "projects",
    staleTime: 10000,
  });



  return (
    <Select onValueChange={handleSelect} defaultValue={defaultValue}>
      <SelectTrigger className="w-[180px] mx-3">
        <SelectValue placeholder="Select a project" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {
            data?.map((project) => <SelectItem key={project.id} value={project.id}>{project.name}</SelectItem>)
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}