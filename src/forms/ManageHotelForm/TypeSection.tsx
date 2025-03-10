import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { hotelTypes } from "@/config/hotel-options-config";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 bg-gray-50 p-2 md:p-5 shadow-md">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={
              typeWatch === type
                ? "cursor-pointer bg-blue-300 text-sm rounded-full px-4 py-2 font-semibold text-center"
                : "cursor-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold text-center"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};

export default TypeSection;
