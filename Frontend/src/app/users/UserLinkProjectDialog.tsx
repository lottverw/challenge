import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ProjectSelect } from "../projects/ProjectSelect";
import { IUser } from "@/api/users";
import { assignUserToProject, IProject } from "@/api/projects";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function UserFormDialog({ user }: { user: IUser }) {
  const queryClient = useQueryClient();

  const [selectedProjectId, setSelectedProjectId] = useState("");

  function handleProjectSelect(projectId: string) {
    setSelectedProjectId(projectId);
  }


  const addProject = async () => {
    try {
      // API call to add the project
      await assignUserToProject(user.id, selectedProjectId);

      const cachedProjects = queryClient.getQueryData(['projects' + user.id]);

      console.log('cachedProjects', cachedProjects,['projects' + user.id])
      const selectedProject = cachedProjects?.find((project: IProject) => project.id === selectedProjectId);

      console.log(selectedProject);
      queryClient.setQueryData(['users'], (oldUsers: IUser[] | undefined) => {
        if (!oldUsers) return [];

        // Find the user and update their projects
        return oldUsers.map(u =>
          u.id === user.id
            ? { ...u, projects: [...u.projects, selectedProject] }
            : u
        );
      });

      // Reset value 
      setSelectedProjectId('')
    } catch (error) {
      console.error('Failed to add project:', error);
    }
  };
  return (
    <Dialog>


      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="block mt-3">Link project</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Link project to {user.name}</DialogTitle>
        </DialogHeader>
        <ProjectSelect userId={user.id} handleSelect={handleProjectSelect} defaultValue={selectedProjectId} />
        <DialogFooter>
          <DialogClose onClick={addProject}>
          <span className="hover:bg-blue-50 border p-3 rounded text-dark text-sm">Save changes</span>
       </DialogClose>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  );

}