import { useQuery } from "react-query";
import * as apiClient from "../api/hotelApi";
import { Link } from "react-router-dom";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiStar } from "react-icons/bi";
import { useState } from "react";

const MyHotels = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    { onError: () => {} }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleCardDetails = (hotelId: any) => {
    setExpandedCard((prev) => (prev === hotelId ? null : hotelId)); // Toggle the selected card
  };
  //   console.log(hotelData);
  if (!hotelData) {
    return <span>No Hotels found</span>;
  }
  return (
    <div className="space-y-5">
      <span className="flex justify-between px-2">
        <h1 className="md:text-3xl font-bold">My Hotels</h1>
        <Link
          to="/create-hotel"
          className="flex bg-orange-500 text-white md:text-lg p-2 font-semibold rounded-md hover:bg-orange-300"
        >
          Add Hotel
        </Link>
      </span>
      <hr />
      <div className="grid grid-cols-1 gap-8 px-2">
        {hotelData.map((hotel) => (
          <div
            key={hotel._id}
            className="relative flex w-full md:flex-row flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-xl md:rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={hotel.imageUrls[0]}
                alt="image"
                className="min-h-full w-full object-cover"
              />
            </div>
            <div className="px-4 py-3">
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {hotel.name}
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                {expandedCard === hotel._id
                  ? hotel.description
                  : hotel.description.slice(0, 100) + "....."}
                <button
                  onClick={() => toggleCardDetails(hotel._id)}
                  className="text-orange-500"
                >
                  {expandedCard === hotel._id ? "See less" : "See more"}
                </button>
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <div className="rounded-t-3xl rounded-bl-3xl text-sm text-white bg-orange-300 px-2 flex items-center">
                  <span className="rounded-full bg-white text-orange-300 w-6 h-6 flex items-center justify-center mr-1">
                    <BsMap />
                  </span>
                  {hotel.city}, {hotel.country}
                </div>
                <div className="rounded-t-3xl rounded-bl-3xl text-sm text-white bg-orange-300 p-2 flex items-center">
                  <span className="rounded-full bg-white text-orange-300 w-6 h-6 flex items-center justify-center mr-1">
                    <BsBuilding />
                  </span>
                  {hotel.type}
                </div>
                <div className="rounded-t-3xl rounded-bl-3xl text-sm text-white bg-orange-300 p-2 flex items-center gap-1">
                  <span className="rounded-full bg-white text-orange-300 w-6 h-6 flex items-center justify-center mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                  <span>${hotel.pricePerNight} per night</span>
                </div>
                <div className="rounded-t-3xl rounded-bl-3xl text-sm text-white bg-orange-300 p-2 flex items-center gap-1">
                  <span className="rounded-full bg-white text-orange-300 w-6 h-6 flex items-center justify-center mr-1">
                    <BiHotel />
                  </span>
                  <span>
                    {hotel.adultCount} adults, {hotel.childCount} children
                  </span>
                </div>
                <div className="rounded-t-3xl rounded-bl-3xl text-sm text-white bg-orange-300 p-2 flex items-center">
                  <span className="rounded-full bg-white text-orange-300 w-6 h-6 flex items-center justify-center mr-1">
                    <BiStar />
                  </span>
                  {hotel.starRating} Star Rating
                </div>
              </div>
              <a className="inline-block mt-4">
                <Link
                  to={`/edit-hotel/${hotel._id}`}
                  className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Edit hotel
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </Link>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
