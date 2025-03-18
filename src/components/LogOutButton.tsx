import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api/userApi";
import { toast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
const LogOutButton = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.LogOut, {
    onSuccess: async () => {
      toast({ description: "Log Out!" });
      await queryClient.invalidateQueries(["validateToken"]);
      // await queryClient.refetchQueries();
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
      className="uppercase text-xs font-semibold p-2 md:p-3 rounded-lg bg-orange-500 text-white "
    >
      Log Out
    </Button>
  );
};

export default LogOutButton;
