import { useQuery } from "react-query";
import { useFetch } from "./useFetch";

export const useData = (pagination = 20) => {
  const client = useFetch();
  const fetchData = () => client.get(`/?results=${pagination}`);
  const userData = useQuery("user-data", fetchData);
  return userData;
};
