import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  //   const pageNumbers = [];
  //   for (let i = 1; i <= pages; i++) {
  //     pageNumbers.push(i);
  //   }

  // Generate page numbers dynamically
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      <ul className="flex items-center space-x-2">
        {/* Left Arrow */}
        <li>
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className={`p-2 rounded-full ${
              page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            <HiArrowSmLeft size={20} />
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-1 rounded-full ${
                page === number
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Right Arrow */}
        <li>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === pages}
            className={`p-2 rounded-full ${
              page === pages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <HiArrowSmRight size={20} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
