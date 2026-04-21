// src/pages/RecipeBoxPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";

export default function RecipeBoxPage() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState("Saved Recipes");

  // Mock data
  const recipes = [
    {
      id: 1,
      title: "Italian-style tomato salad",
      time: "14 minutes",
      image: "LINK_ANH_1",
    },
    {
      id: 2,
      title: "Vegetable and shrimp spaghetti",
      time: "15 minutes",
      image: "LINK_ANH_2",
    },
    {
      id: 3,
      title: "Lotus delight salad",
      time: "20 minutes",
      image: "LINK_ANH_3",
    },
    { id: 4, title: "Snack cakes", time: "21 minutes", image: "LINK_ANH_4" },
    {
      id: 5,
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
      image: "LINK_ANH_5",
    },
    {
      id: 6,
      title: "Bean, shrimp, and potato salad",
      time: "32 minutes",
      image: "LINK_ANH_6",
    },
    {
      id: 7,
      title: "Sunny-side up fried eggs",
      time: "32 minutes",
      image: "LINK_ANH_7",
    },
    {
      id: 8,
      title: "Lotus delight salad",
      time: "32 minutes",
      image: "LINK_ANH_8",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <HeaderLoggedIn />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/home" className="hover:text-pink-500 transition-colors">
            Home
          </Link>
          <MdOutlineKeyboardArrowRight size={16} />
          <span className="text-pink-500 font-medium">Your Recipe Box</span>
        </div>

        {/* Profile Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 font-serif">
            {user?.name || "Emma Gonzalez"}'s Recipe Box
          </h1>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <img
              src={user?.avatar || "https://i.pravatar.cc/150?img=11"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover p-1 bg-pink-100"
            />
            <div className="flex-1">
              <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-3xl">
                Emma Gonzalez is a deputy editor at Chefify, bringing her
                expertise as a former cooking editor at The Los Angeles Times.
                She is also an accomplished author, contributing to numerous
                cookbooks and food publications. Originally from East Los
                Angeles, Emma now resides in New York City, where she explores a
                wide range of culinary delights.
              </p>
              <div className="flex items-center gap-6">
                <span className="text-pink-500 font-semibold text-sm">
                  6.5k Subscribers
                </span>
                <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors">
                  Share <FiShare2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8 gap-8 overflow-x-auto">
          {["Saved Recipes", "Folders", "Recipes by Genevieve"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                activeTab === tab
                  ? "text-pink-500"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 rounded-t-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              time={recipe.time}
              imageUrl={recipe.image}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition">
            &lt;
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-pink-500 text-white font-medium shadow-sm">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
            4
          </button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
            10
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition">
            11
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition">
            &gt;
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
