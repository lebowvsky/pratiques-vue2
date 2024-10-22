import { apiClient } from "@/xhr/apiClient";

export const fetchUsers = () => {
  return apiClient.get();
};
