// src/components/EmptySearchResults.jsx
import { FiSearch } from "react-icons/fi";

export default function EmptySearchResults() {
  const suggestedTags = [
    { label: "Sweet Cake", color: "text-pink-500", bg: "bg-pink-50" },
    { label: "Black Cake", color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Pozole Verde", color: "text-pink-500", bg: "bg-pink-50" },
    { label: "Healthy food", color: "text-teal-600", bg: "bg-teal-50" },
  ];

  return (
    <div className="flex-1 bg-gray-50/50 flex flex-col items-center justify-center p-8 text-center min-h-[600px]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
        Sorry, no results were found for "cakescascsa"
      </h2>

      {/* Box Illustration (Sử dụng CSS để vẽ mockup box tương tự thiết kế) */}
      <div className="relative w-48 h-48 mb-8">
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="w-32 h-24 bg-pink-400 rounded-sm relative shadow-md">
            {/* Hộp nắp mở */}
            <div className="absolute -top-4 left-0 w-16 h-6 bg-pink-300 -skew-x-[30deg] origin-bottom-left"></div>
            <div className="absolute -top-4 right-0 w-16 h-6 bg-pink-200 skew-x-[30deg] origin-bottom-right"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-12 bg-blue-100 rounded-sm"></div>
            <div className="absolute bottom-6 right-4 w-6 h-1 bg-pink-500"></div>
            <div className="absolute bottom-8 right-4 w-8 h-1 bg-pink-500"></div>
          </div>
        </div>
        {/* Kính lúp */}
        <div className="absolute -top-4 right-4 text-pink-500 drop-shadow-xl z-10 flex flex-col items-center">
          <div className="w-20 h-20 border-[6px] border-pink-500 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-sm">
            <span className="text-3xl font-bold">X</span>
          </div>
          <div className="w-4 h-12 bg-pink-500 rounded-full -mt-2 -rotate-45 ml-12"></div>
        </div>
      </div>

      <p className="text-gray-800 font-medium mb-6">
        We have all your Independence Day sweets covered.
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {suggestedTags.map((tag, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition hover:scale-105 ${tag.bg} ${tag.color}`}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
}
