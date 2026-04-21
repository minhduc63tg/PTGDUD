// src/components/Modal/OnboardingModal.jsx

import { useNavigate } from "react-router-dom";
export default function OnboardingModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    // Backdrop overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-[500px] p-8 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button (Icon X) */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6 mt-2">
          <h2 className="text-3xl font-extrabold text-pink-500 mb-3 tracking-tight">
            Discover Chefify
          </h2>
          <p className="text-gray-500 text-sm font-medium px-4">
            Easy and delicious cooking instructions right here. Start exploring
            now!
          </p>
        </div>

        {/* Carousel Image Area */}
        <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl mb-6 overflow-hidden shadow-inner">
          <img
            src="/deliciousFood.png"
            alt="Delicious food display"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Carousel Indicators (Dots) */}
        <div className="flex justify-center gap-2 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500 transition-all"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200 transition-all"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-gray-200 transition-all"></span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-2xl py-3.5 font-bold text-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            onClick={() => navigate("/")}
          >
            Next
          </button>

          <button
            onClick={onClose}
            className="text-pink-500 text-sm font-bold hover:underline transition-all"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
