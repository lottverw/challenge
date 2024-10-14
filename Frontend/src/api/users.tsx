import { IProject } from './projects';
import { BASEURL } from './helpers';

export interface IUser {
  id: string;
  image: string;
  name: string;
  jobTitle: string;
  email: string;
  projects?: IProject[]
}


async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer ....",
    },
  };



  const response = fetch(
    BASEURL + "/users",
    options
  )
    .then((response) => response.json()

    )
    .catch((err) => console.error(err));

  return response;
}

export async function getUsers() {
  const data = await getData();
  return data;
}