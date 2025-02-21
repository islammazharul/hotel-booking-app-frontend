import { Star } from "lucide-react";

type StarRatingProps = {
  selectedStars: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const StarRatingFilter = ({ selectedStars, onChange }: StarRatingProps) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Property Rating</h4>
      {["1", "2", "3", "4", "5"].map((star) => (
        <label className="flex items-center space-x-2 md:space-y-2">
          <input
            type="checkbox"
            className="rounded"
            value={star}
            checked={selectedStars.includes(star)}
            onChange={onChange}
          />

          <div
            className={`flex ${
              selectedStars.includes(star) ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            {Array.from({ length: Number(star) }).map((_, i) => (
              <Star
                key={i}
                size={20}
                fill={selectedStars.includes(star) ? "yellow" : "none"}
                stroke="currentColor"
              />
            ))}
          </div>
        </label>
      ))}
    </div>
  );
};

export default StarRatingFilter;
