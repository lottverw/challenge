import { BASEURL } from "./helpers";
import { IUser } from "./users";


export interface IProject {
  id: string;
  name: string;
  color: string;
  description: string;
  deadline: string;
  budget: number;
  users?: IUser[]
}


async function getData(params: string | null) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer ....",
    },
  };

  const response = fetch(
    BASEURL + "/projects" + params,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}


export async function getProjects(userId: string | undefined) {
  let queryString = "";

  if (userId) {
    queryString += '?user_id=' + userId;
  }

  const data = await getData(queryString);
  return data;
}

export async function assignUserToProject (userId: string, projectId: string) {
  const url = BASEURL + '/projects/assign';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userId,
      project_id: projectId
    }),
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;

};