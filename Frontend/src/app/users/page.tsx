"use client"

import UserCard from "@/app/users/UserCard";
import { useQuery } from "@tanstack/react-query";
import { getUsers, IUser } from "@/api/users";
import { useState } from "react";
import FormSearch from "./FormSearch";
import Heading from "@/components/common/Heading";
import { IProject } from "@/api/projects";
import Loader from "@/components/common/Loader";

export default function Users() {
  const { data: users, isLoading, isError } = useQuery({
    queryFn: async () => await getUsers(),
    queryKey: ["users"],
  });

  const [emailFilter, setEmailFilter] = useState<String>("");
  const [projectFilter, setProjectFilter] = useState<String>("");


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailFilter(event.target.value)
  }

  const handleProjectSelect = (projectId: string) => {
    setProjectFilter(projectId)
  }

  const clearFilters = () => {
    setEmailFilter('')
    setProjectFilter('')

  }

  let filteredUsers = users;
  if (isLoading) {
    filteredUsers = [];
  }

  else {
    filteredUsers = emailFilter.length > 0 && users?.length > 0 ? users.filter((user: IUser) => {
      return user.email.toLowerCase().includes(emailFilter.toLowerCase())
    }) : users;


    if (projectFilter.length > 0) {
      filteredUsers = filteredUsers.filter((user: IUser) => {
        return user.projects?.some(
          (project: IProject) => project.id === projectFilter
        );
      });
    }
  }

  return (
    <>
      <Heading title="Users" />
      <FormSearch
        handleEmailChange={handleEmailChange}
        emailFilter={emailFilter}
        projectFilter={projectFilter}
        handleProjectSelect={handleProjectSelect}
        clearFilter={clearFilters}
      />
      {
        !isLoading && !isError ?
          filteredUsers?.map((user: IUser) => {
            return <UserCard key={"user_" + user.id} user={user} />
          })
          : ''
      }

      {
        isLoading ? <Loader /> : null
      }
    </>
  )
}
