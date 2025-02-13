// import { useSearchContext } from "@/contexts/SearchContext";
// import { useState } from "react";
// import { useQuery } from "react-query";
import DatePicker from "react-datepicker";
const SearchBar = () => {
  // const search = useSearchContext();
  // const [page, setPage] = useState<number>(1);
  // const [selectedStars, setSelectedStars] = useState<string[]>([]);
  // const [selectedHotelTypes, setSelectedHotelTypes] = useState<string[]>([]);
  // const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  // const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
  // const [sortOption, setSortOption] = useState<string>("");

  // const searchParams = {
  //   destination: search.destination,
  //   checkIn: search.checkIn.toISOString(),
  //   checkOut: search.checkOut.toISOString(),
  //   adultCount: search.adultCount.toString(),
  //   childCount: search.childCount.toString(),
  //   page: page.toString(),
  //   stars: selectedStars,
  //   types: selectedHotelTypes,
  //   facilities: selectedFacilities,
  //   maxPrice: selectedPrice?.toString(),
  //   sortOption,
  // };

  // const { data: hotelData } = useQuery(["searchHotels", searchParams], () =>
  //   apiClient.searchHotels(searchParams)
  // );

  // const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const starRating = event.target.value;

  //   setSelectedStars((prevStars) =>
  //     event.target.checked
  //       ? [...prevStars, starRating]
  //       : prevStars.filter((star) => star !== starRating)
  //   );
  // };

  // const handleHotelTypeChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const hotelType = event.target.value;

  //   setSelectedHotelTypes((prevHotelTypes) =>
  //     event.target.checked
  //       ? [...prevHotelTypes, hotelType]
  //       : prevHotelTypes.filter((hotel) => hotel !== hotelType)
  //   );
  // };

  // const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const facility = event.target.value;

  //   setSelectedFacilities((prevFacilities) =>
  //     event.target.checked
  //       ? [...prevFacilities, facility]
  //       : prevFacilities.filter((prevFacility) => prevFacility !== facility)
  //   );
  // };
  return (
    <form
      //   onSubmit={"handleSubmit"}
      className="p-3 bg-orange-500 shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4"
    >
      <div className="flex flex-row items-center rounded-full flex-1 bg-white p-2">
        {/* <MdTravelExplore size={25} className="mr-2" /> */}
        <input
          placeholder="Where are you going?"
          className="text-md w-full  focus:outline-none"
          //   value={destination}
          // onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="flex items-center bg-white rounded-full px-2 py-1 gap-2">
        <label className="items-center flex">
          Adults:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={1}
            max={20}
            // value={adultCount}
            // onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        <span className=" w-1 h-4 bg-blue-800"></span>
        <label className="items-center flex">
          Children:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={0}
            max={20}
            // value={childCount}
            // onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </div>
      <div>
        <DatePicker
          // selected={checkIn}
          // onChange={(date) => setCheckIn(date as Date)}
          // selectsStart
          // startDate={checkIn}
          // endDate={checkOut}
          // minDate={minDate}
          // maxDate={maxDate}
          placeholderText="Check-in Date"
          className="min-w-full rounded-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div>
        <DatePicker
          // selected={checkOut}
          // onChange={(date) => setCheckOut(date as Date)}
          // selectsStart
          // startDate={checkIn}
          // endDate={checkOut}
          // minDate={minDate}
          // maxDate={maxDate}
          placeholderText="Check-out Date"
          className="min-w-full rounded-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div className="flex">
        <button className="w-2/3 bg-blue-600 rounded-tl-full rounded-bl-full text-white h-full p-2 font-bold hover:bg-blue-500">
          Search
        </button>
        <button className="w-1/3 bg-red-600 rounded-tr-full rounded-br-full text-white h-full p-2 font-bold hover:bg-red-500">
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
