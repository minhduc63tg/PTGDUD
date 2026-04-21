import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Footer from "../components/Footer";
import { MOCK_RECIPES } from "../data/recipes";
import { useAuthStore } from "../store/useAuthStore";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isSubscribed = useAuthStore((state) => state.isSubscribed);
  const recipe = MOCK_RECIPES.find((item) => item.id === Number(id));

  if (!recipe) return <Navigate to="/home" replace />;

  if (recipe.requiresSubscription && !isSubscribed) {
    return <Navigate to={`/subscribe?recipeId=${recipe.id}`} replace />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <HeaderLoggedIn />
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/home" className="hover:text-pink-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-pink-500 font-medium">Recipe Detail</span>
        </div>

        <section className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-50">
            <img
              src={
                recipe.image && !recipe.image.includes("LINK_")
                  ? recipe.image
                  : "https://placehold.co/900x600/fdf2f8/db2777?text=Recipe+Detail"
              }
              alt={recipe.title}
              className="w-full h-full object-cover min-h-[320px]"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-pink-500 font-semibold mb-3">
              {recipe.type} • {recipe.timeNum} minutes • {recipe.rating} stars
            </p>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              {recipe.description}
            </p>

            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-5 mb-6">
              <h2 className="font-bold text-gray-900 mb-3">Quick Ingredients</h2>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>- Fresh vegetables and herbs</li>
                <li>- Quality protein source</li>
                <li>- Olive oil, lemon, salt, pepper</li>
              </ul>
            </div>

            <button
              onClick={() => navigate("/home")}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Back to recipes
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
