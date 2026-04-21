
import { useState } from "react";
export default function Header({ onLoginClick, onSignUpClick }) {
  const [search, setSearch] = useState("");
  return (
    <header
      className="max-w-6xl
      mx-auto flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 z-10 relative"
    >
      {/* Logo Area */}
      <div className="flex items-center gap-2 text-pink-500 font-bold text-2xl cursor-pointer">
       
        <div className="bg-pink-100 p-2 rounded-lg">
          <span className="text-xl">👩‍🍳</span>
        </div>
        Chefify
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="What would you like to cook?"
          className="w-full bg-gray-100 text-gray-700 rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-pink-500 transition-colors">
          What to cook
        </a>
        <a href="#" className="hover:text-pink-500 transition-colors">
          Recipes
        </a>
        <a href="#" className="hover:text-pink-500 transition-colors">
          Ingredients
        </a>
        <a href="#" className="hover:text-pink-500 transition-colors">
          Occasions
        </a>
        <a href="#" className="hover:text-pink-500 transition-colors">
          About Us
        </a>
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3 ml-4">
        <button
          className="px-5 py-2.5 text-pink-600 bg-pink-50 hover:bg-pink-100 rounded-xl text-sm font-semibold transition-colors"
          onClick={onLoginClick}
        >
          Login
        </button>
        <button
          onClick={onSignUpClick}
          className="px-5 py-2.5 bg-pink-500 hover:bg-pink-600 text-white rounded-xl text-sm font-semibold shadow-sm transition-colors"
        >
          Subscribe
        </button>
      </div>
    </header>
  );
}
