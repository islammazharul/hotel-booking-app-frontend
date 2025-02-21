import { HotelType } from "@/types/hotelTypes";
import { Link } from "react-router-dom";

type HotelProps = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: HotelProps) => {
  const averageRating = hotel.reviews.reduce((acc, review) => {
    return acc + review.rating / hotel.reviews.length;
  }, 0);

  return (
    <Link
      to={`/details/${hotel._id}`}
      className="relative cursor-pointer overflow-hidden rounded-md"
    >
      <div className="h-[300px]">
        <img
          src={hotel.imageUrls[0]}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md">
        <h3 className="font-black text-white tracking-tight md:text-2xl text-xl">
          {hotel.name}
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-black text-orange-500">
              ${hotel.pricePerNight}
              <span className="font-normal text-gray-100 text-base">
                /night
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-gray-300 font-bold text-sm ml-1">
              {averageRating > 0 ? averageRating.toFixed(1) : 0}
              <span className="text-gray-300 font-normal">
                ({hotel.reviews.length} Reviews)
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestDestinationCard;
