import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api/hotelApi";
import ManageHotelForm from "@/forms/ManageHotelForm/ManageHotelForm";

const EditHotel = () => {
  const { hotelId } = useParams();
  const { toast } = useToast();

  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
    onSuccess: () => {
      toast({ description: "Hotel successfully updated!" });
    },
    onError: () => {
      toast({ description: "Hotel updated failed!" });
    },
  });

  const handleSaved = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSaved} isLoading={isLoading} />
  );
};

export default EditHotel;
