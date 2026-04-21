// src/components/SidebarFilter.jsx
import { FiChevronUp } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";

export default function SidebarFilter({ onApply }) {
  const ratingLevels = [5, 4, 3, 2, 1];
  const mealTypes = [
    "Pan-fried",
    "Stir-fried",
    "Grilled",
    "Roasted",
    "Sauteed",
    "Baked",
    "Steamed",
    "Stewed",
  ];

  // Local state cho bộ lọc
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [timeRange, setTimeRange] = useState({ min: 0, max: 120 });
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Xử lý Checkbox Type
  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  // Xử lý Checkbox Rating
  const handleRatingChange = (level) => {
    setSelectedRatings((prev) =>
      prev.includes(level) ? prev.filter((r) => r !== level) : [...prev, level],
    );
  };

  // Bấm Apply truyền data ra ngoài
  const handleApply = () => {
    if (onApply) {
      onApply({
        types: selectedTypes,
        time: timeRange,
        ratings: selectedRatings,
      });
    }
  };

  const handleMinTimeChange = (value) => {
    const min = Number(value);
    setTimeRange((prev) => ({ ...prev, min: Math.min(min, prev.max) }));
  };

  const handleMaxTimeChange = (value) => {
    const max = Number(value);
    setTimeRange((prev) => ({ ...prev, max: Math.max(max, prev.min) }));
  };
  return (
    <aside className="w-full lg:w-[280px] bg-white border border-gray-200 p-6 flex flex-col gap-6 rounded-xl">
      <div className="flex items-center gap-2 font-bold tracking-widest text-sm text-gray-800">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L13 10.414V15a1 1 0 01-.293.707l-2 2A1 1 0 019 17v-6.586L5.293 6.707A1 1 0 015 6V4z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
        FILTERS
      </div>

      {/* Type Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-gray-800 text-sm">Type</h4>
          <FiChevronUp className="text-pink-500" />
        </div>
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-600">
          {mealTypes.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer hover:text-pink-500 transition"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="w-4 h-4 accent-pink-500 rounded border-gray-300 cursor-pointer"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Time Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold text-gray-800 text-sm">Time</h4>
          <FiChevronUp className="text-pink-500" />
        </div>
        <div className="px-2">
          <div className="flex justify-between text-xs text-gray-500 mb-2 font-medium">
            <span>{timeRange.min} minutes</span>
            <span>{timeRange.max} minutes</span>
          </div>
          <input
            type="range"
            min="0"
            max="120"
            value={timeRange.min}
            onChange={(e) => handleMinTimeChange(e.target.value)}
            className="w-full accent-pink-500 mb-2"
          />
          <input
            type="range"
            min="0"
            max="120"
            value={timeRange.max}
            onChange={(e) => handleMaxTimeChange(e.target.value)}
            className="w-full accent-pink-500"
          />
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Rating Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-gray-800 text-sm">Rating</h4>
          <FiChevronUp className="text-pink-500" />
        </div>
        <div className="flex flex-col gap-2 text-yellow-400">
          {ratingLevels.map((level) => (
            <label
              key={level}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedRatings.includes(level)}
                onChange={() => handleRatingChange(level)}
                className="w-4 h-4 accent-pink-500 rounded border-gray-300 cursor-pointer"
              />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) =>
                  i < level ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                  ),
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleApply}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl mt-4 transition active:scale-95"
      >
        Apply
      </button>
      <button
        onClick={() => {
          setSelectedTypes([]);
          setSelectedRatings([]);
          setTimeRange({ min: 0, max: 120 });
          onApply?.({ types: [], time: { min: 0, max: 120 }, ratings: [] });
        }}
        className="w-full border border-pink-200 text-pink-500 font-semibold py-3 rounded-xl transition"
      >
        Reset
      </button>
    </aside>
  );
}
