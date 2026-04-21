// src/pages/SearchPage.jsx
import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import SidebarFilter from "../components/SidebarFilter";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard"; // Tái sử dụng RecipeCard từ phần trước
import EmptySearchResults from "../components/EmptySearchResults";
import { MOCK_RECIPES } from "../data/recipes";
import { useAuthStore } from "../store/useAuthStore";

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isSubscribed = useAuthStore((state) => state.isSubscribed);
  const keyword = (searchParams.get("q") || "").trim();

  const [sortOrder, setSortOrder] = useState("A-Z");

  // State lưu trữ bộ lọc đang được active
  const [activeFilters, setActiveFilters] = useState({
    types: [],
    time: { min: 0, max: 120 },
    ratings: [],
  });

  // LOGIC LỌC CHÍNH (dùng useMemo để tối ưu hiệu năng)
  const filteredRecipes = useMemo(() => {
    return MOCK_RECIPES.filter((recipe) => {
      // 1. Lọc theo từ khóa tìm kiếm (Title)
      const matchKeyword = recipe.title
        .toLowerCase()
        .includes(keyword.toLowerCase());

      // 2. Lọc theo Type
      const matchType =
        activeFilters.types.length === 0 ||
        activeFilters.types.includes(recipe.type);

      // 3. Lọc theo Time
      const matchTime =
        recipe.timeNum >= activeFilters.time.min &&
        recipe.timeNum <= activeFilters.time.max;

      // 4. Lọc theo Rating
      const matchRating =
        activeFilters.ratings.length === 0 ||
        activeFilters.ratings.includes(recipe.rating);

      return matchKeyword && matchType && matchTime && matchRating;
    }).sort((a, b) => {
      // Logic sắp xếp A-Z
      if (sortOrder === "A-Z") return a.title.localeCompare(b.title);
      if (sortOrder === "Z-A") return b.title.localeCompare(a.title);
      if (sortOrder === "Newest") return b.id - a.id;
      return 0;
    });
  }, [keyword, activeFilters, sortOrder]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50/30">
      <HeaderLoggedIn initialSearch={keyword} />

      <main className="flex flex-col lg:flex-row flex-1 max-w-[1400px] w-full mx-auto px-6 py-8 gap-8">
        {/* Cột trái: Bộ lọc */}
        <div className="hidden lg:block">
          <SidebarFilter
            onApply={(newFilters) => setActiveFilters(newFilters)}
          />
        </div>

        {/* Cột phải: Kết quả */}
        <div className="flex-1">
          {filteredRecipes.length === 0 ? (
            <EmptySearchResults />
          ) : (
            <>
              {/* Header Kết quả & Sort */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h1 className="text-3xl font-extrabold text-gray-900">
                  {keyword ? (
                    <span className="capitalize">{keyword}</span>
                  ) : (
                    "All Recipes"
                  )}
                  <span className="text-gray-500 ml-2 font-medium text-2xl">
                    ({filteredRecipes.length})
                  </span>
                </h1>

                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 mt-4 sm:mt-0"
                >
                  <option value="A-Z">A - Z</option>
                  <option value="Z-A">Z - A</option>
                  <option value="Newest">Newest</option>
                </select>
              </div>

              {/* Grid Công thức */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    time={`${recipe.timeNum} minutes`}
                    imageUrl={recipe.image}
                    isPremium={recipe.requiresSubscription}
                    isLocked={recipe.requiresSubscription && !isSubscribed}
                    onClick={() => {
                      if (recipe.requiresSubscription && !isSubscribed) {
                        navigate(`/subscribe?recipeId=${recipe.id}`);
                        return;
                      }
                      navigate(`/recipes/${recipe.id}`);
                    }}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center sm:justify-end items-center gap-2 mt-8">
                <button className="w-8 h-8 rounded-lg text-gray-500 hover:bg-gray-200 transition">
                  &lt;
                </button>
                <button className="w-8 h-8 rounded-lg bg-pink-500 text-white font-medium">
                  1
                </button>
                <button className="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <span className="text-gray-400">...</span>
                <button className="w-8 h-8 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                  11
                </button>
                <button className="w-8 h-8 rounded-lg text-gray-500 hover:bg-gray-200 transition">
                  &gt;
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
