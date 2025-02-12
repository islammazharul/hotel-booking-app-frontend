import ManageHotelForm from "@/forms/ManageHotelForm/ManageHotelForm";
import * as apiClient from "@/api/hotelApi";
import { useMutation } from "react-query";
import { useToast } from "@/hooks/use-toast";

const CreateHotel = () => {
  const { toast } = useToast();
  const { mutate, isLoading } = useMutation(apiClient.createHotel, {
    onSuccess: async (data) => {
      console.log(data);
      toast({ description: "Hotel Saved!" });
    },
    onError: async (error) => {
      console.log(error);
      toast({ description: "Failed to save hotel!" });
    },
  });
  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };
  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default CreateHotel;
