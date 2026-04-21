import HeaderLoggedIn from "../components/HeaderLoggedIn";
import SidebarFilter from "../components/SidebarFilter";
import EmptySearchResults from "../components/EmptySearchResults";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import { useMemo, useState } from "react";
import { MOCK_RECIPES } from "../data/recipes";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function HomePage() {
  const navigate = useNavigate();
  const isSubscribed = useAuthStore((state) => state.isSubscribed);
  const [sortOrder, setSortOrder] = useState("Newest");
  const [activeFilters, setActiveFilters] = useState({
    types: [],
    time: { min: 0, max: 120 },
    ratings: [],
  });

  const filteredRecipes = useMemo(() => {
    return MOCK_RECIPES.filter((recipe) => {
      const matchType =
        activeFilters.types.length === 0 ||
        activeFilters.types.includes(recipe.type);
      const matchTime =
        recipe.timeNum >= activeFilters.time.min &&
        recipe.timeNum <= activeFilters.time.max;
      const matchRating =
        activeFilters.ratings.length === 0 ||
        activeFilters.ratings.includes(recipe.rating);

      return matchType && matchTime && matchRating;
    }).sort((a, b) => {
      if (sortOrder === "A-Z") return a.title.localeCompare(b.title);
      if (sortOrder === "Z-A") return b.title.localeCompare(a.title);
      return b.id - a.id;
    });
  }, [activeFilters, sortOrder]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <HeaderLoggedIn initialSearch="" />
      <main className="flex flex-col lg:flex-row flex-1 max-w-[1400px] w-full mx-auto px-6 py-8 gap-8">
        <div className="hidden lg:block w-fit">
          <SidebarFilter onApply={(newFilters) => setActiveFilters(newFilters)} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-3xl font-extrabold text-gray-900">
              All Recipes
              <span className="text-gray-500 ml-2 font-medium text-2xl">
                ({filteredRecipes.length})
              </span>
            </h1>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 mt-4 sm:mt-0"
            >
              <option value="Newest">Newest</option>
              <option value="A-Z">A - Z</option>
              <option value="Z-A">Z - A</option>
            </select>
          </div>

          {filteredRecipes.length === 0 ? (
            <EmptySearchResults />
          ) : (
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}