import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { FiSearch } from "react-icons/fi";
import { BiBookHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeaderLoggedIn({ initialSearch = "" }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const { user, logout, isSubscribed } = useAuthStore(); // Lấy user data và hàm logout từ store

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchTerm.trim();
    navigate(query ? `/search?q=${encodeURIComponent(query)}` : "/search");
  };

  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  const handleLogout = () => {
    logout();
    navigate("/"); // Trả về trang Welcome
  };
  return (
    <header
      className="max-w-6xl
      mx-auto flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 z-10 sticky top-0"
    >
      <div className="flex items-center gap-2 text-pink-500 font-bold text-2xl cursor-pointer">
        <span className="text-xl bg-pink-50 p-1.5 rounded-lg">👩‍🍳</span> Chefify
      </div>

      {/* Search Input */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
        <FiSearch className="absolute left-4 text-gray-400" size={18} />
        <form onSubmit={handleSearchSubmit} className="w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="What would you like to cook?"
            className="w-full bg-gray-100 text-gray-700 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
          />
        </form>
      </div>
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-pink-500">
          What to cook
        </a>
        <a href="#" className="hover:text-pink-500">
          Recipes
        </a>
        <a href="#" className="hover:text-pink-500">
          Ingredients
        </a>
        <a href="#" className="hover:text-pink-500">
          Occasions
        </a>
        <a href="#" className="hover:text-pink-500">
          About Us
        </a>

        <Link
          to="/recipe-box"
          className="hidden sm:flex items-center gap-2 px-4 py-2 text-pink-500 bg-pink-50 rounded-lg text-sm font-semibold hover:bg-pink-100 transition"
        >
          <BiBookHeart size={18} /> Your Recipe Box
        </Link>
      </nav>

      {/* User Actions */}
      {/* User Actions */}
      <div className="flex items-center gap-4 ml-4">
        <div className="flex flex-col items-end">
          <span className="font-semibold text-sm">{user?.name}</span>
          {isSubscribed ? (
            <span className="text-[11px] text-amber-600 font-semibold">
              Premium
            </span>
          ) : null}
        </div>

        {/* Bọc Avatar trong một group để làm dropdown menu (mô phỏng) hoặc click để đăng xuất */}
        <div className="relative group cursor-pointer" onClick={handleLogout}>
          <img
            src={user?.avatar}
            alt="User Profile"
            className="w-10 h-10 rounded-full object-cover border border-gray-200 hover:ring-2 hover:ring-pink-500 transition"
          />
          {/* Tooltip nhỏ báo hiệu click để đăng xuất */}
          <div className="absolute top-12 right-0 bg-black text-white text-xs px-2 py-1 rounded hidden group-hover:block whitespace-nowrap z-50">
            Click to Logout
          </div>
        </div>
      </div>
    </header>
  );
}
