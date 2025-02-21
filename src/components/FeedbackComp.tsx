import { useState } from "react";
import { Star } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import * as apiClient from "@/api/hotelApi";
import { toast } from "@/hooks/use-toast";

export type FeedbackData = {
  userId: string | undefined;
  hotelId: string | undefined;
  rating: number;
  message?: string | undefined;
};

const FeedbackComp = () => {
  const { hotelId } = useParams();

  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );

  const { mutate: postReview } = useMutation(apiClient.createReview, {
    onSuccess: () => {
      toast({ description: "Successfully sent review!" });
    },
    onError: () => {
      toast({ description: "Review is not sent!!!" });
    },
  });
  const [stars, setStars] = useState(0);

  const formMethods = useForm<FeedbackData>({});
  const {
    handleSubmit,
    reset,
    register,
    setValue,
    formState: { errors },
  } = formMethods;

  const onSubmit: SubmitHandler<FeedbackData> = (data: FeedbackData) => {
    const feedbackData = {
      ...data,
      rating: stars,
      hotelId: hotelId,
      userId: currentUser?._id,
    };
    console.log(feedbackData);
    postReview(feedbackData);
    reset();
    setStars(0);
  };

  const ratingData = [
    { label: "Poor", color: "#E74C3C" },
    { label: "Bad", color: "#E59866" },
    { label: "Okay", color: "#F7DC6F" },
    { label: "Good", color: "#76D7C4" },
    { label: "Great", color: "#229954" },
  ];
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-slate-100 p-2"
    >
      <div className="flex items-center">
        <h3 className="p-2 text-base font-semibold">
          <span className="text-gray-500 ">Rating</span>
        </h3>
        <div className="flex gap-2 p-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex justify-center">
              <Star
                size={25}
                strokeWidth={0}
                fill={index + 1 <= stars ? "gold" : "#D6DBDF"}
                cursor="pointer"
                className="star"
                onClick={() => {
                  setStars(index + 1);
                  setValue("rating", stars);
                }}
              />
            </div>
          ))}
        </div>
        {stars > 0 ? (
          <div
            className="font-semibold min-w-[60px] p-2"
            style={{ color: ratingData[stars - 1]?.color }}
          >
            {ratingData[stars - 1]?.label}
          </div>
        ) : (
          <p className="font-semibold text-gray-400">No ratings</p>
        )}
      </div>
      <input
        type="hidden"
        {...register("rating", { required: "Please provide a rating" })}
      />
      {errors.rating && (
        <span className="text-red-500">{errors.rating.message}</span>
      )}

      <div className="flex flex-col">
        <textarea
          {...register("message", {})}
          className="p-4 text-gray-500 border border-gray-500 resize-none"
        ></textarea>
        <button
          className="p-2 mt-6 text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
          type="submit"
        >
          Rate now
        </button>
      </div>
    </form>
  );
};

export default FeedbackComp;
