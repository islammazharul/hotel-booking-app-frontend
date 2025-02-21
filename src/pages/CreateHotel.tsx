import ManageHotelForm from "@/forms/ManageHotelForm/ManageHotelForm";
import * as apiClient from "@/api/hotelApi";
import { useMutation } from "react-query";
import { useToast } from "@/hooks/use-toast";

const CreateHotel = () => {
  const { toast } = useToast();
  const { mutate, isLoading, reset } = useMutation(apiClient.createHotel, {
    onSuccess: async () => {
      toast({ description: "Hotel Saved!" });
      reset();
    },
    onError: async () => {
      toast({ description: "Failed to save hotel!" });
    },
  });
  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };
  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default CreateHotel;
