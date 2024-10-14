"use client"

import UserCard from "@/app/users/UserCard";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/users";
import { useState } from "react";
import FormLinkSearch from "./FormLinkSearch";
import Heading from "@/components/common/Heading";

export default function Users() {
  const { data: users, isLoading, isError } = useQuery({
    queryFn: async () => await getUsers(),
    queryKey: "users",
  });

  const [ emailFilter, setEmailFilter] = useState<String>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmailFilter(event.target.value)
  }

  let filteredUsers = users;
  if(isLoading) {
    filteredUsers = [];
  }

  else {
    filteredUsers = emailFilter.length > 0 && users?.length > 0 ? users.filter((user) => {
      return user.email.toLowerCase().includes(emailFilter.toLowerCase())
    }) : users;  
  }
  
  return (
      <>
        <Heading title="Users" />
        <FormLinkSearch handleEmailChange={handleEmailChange} emailFilter={emailFilter} />
        {
          !isLoading && !isError ? 
          filteredUsers?.map((user) => {
            return <UserCard key={"user_" + user.id} user={user} />
          })
          : ''
        }

        {
          isLoading ? <p>Loading users...</p> : null
        }      
        </>
  )
}
