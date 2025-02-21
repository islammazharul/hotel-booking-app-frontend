import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api/hotelApi";
// import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "@/forms/GuestInfoForm/GuestInfoForm";
import FeedbackComp from "@/components/FeedbackComp";

const DetailsPage = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <></>;
  }
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{hotel.name}</h1>
        {/* <div className="flex items-center">
          <span className="text-gray-400 mr-2">Ratings:</span>
          {Array.from({ length: hotel.starRating }).map((_, index) => (
            <AiFillStar
              key={`${hotel._id}-${index}`}
              className="fill-yellow-400"
            />
          ))}
        </div> */}
      </div>
      <hr />

      <div className="md:flex justify-between md:gap-5 px-1 space-y-6">
        <div className="md:w-2/3 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-4 rounded-md">
            {hotel.imageUrls.map((image, i) => (
              <div key={i} className="h-[300px]">
                <img
                  src={image}
                  alt={hotel.name}
                  className="rounded-md w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {hotel.facilities.map((facility, i) => (
              <p
                key={i}
                className="bg-gray-200 px-3 py-1 rounded-full font-serif text-gray-800 text-center"
              >
                {facility}
              </p>
            ))}
          </div>

          <div className="whitespace-pre-line">
            <p>
              <strong>Description:</strong> {hotel.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:w-1/4">
          <div className="h-fit">
            <GuestInfoForm
              pricePerNight={hotel.pricePerNight}
              hotelId={hotel._id}
            />
          </div>
          <div className="h-fit">
            <FeedbackComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
