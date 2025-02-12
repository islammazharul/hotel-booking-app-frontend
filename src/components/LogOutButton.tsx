import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/userApi";
import { toast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
const LogOutButton = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.LogOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("refreshToken");
      toast({ description: "Signed Out!" });
    },
    onError: (error: Error) => {
      toast({ description: error.message });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <Button
      onClick={handleClick}
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100 "
    >
      Log Out
    </Button>
  );
};

export default LogOutButton;
