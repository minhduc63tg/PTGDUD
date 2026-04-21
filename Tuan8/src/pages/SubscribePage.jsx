// src/pages/SubscribePage.jsx
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  MdOutlineKeyboardArrowRight,
  MdCheckCircleOutline,
} from "react-icons/md";
import { BiBriefcaseAlt2 } from "react-icons/bi"; // Icon tạm cho nút Subscribe
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import Footer from "../components/Footer";
import { useAuthStore } from "../store/useAuthStore";
import { MOCK_RECIPES } from "../data/recipes";

export default function SubscribePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const recipeId = Number(searchParams.get("recipeId"));
  const currentRecipe = MOCK_RECIPES.find((recipe) => recipe.id === recipeId);
  const { isSubscribed, subscribePlan } = useAuthStore((state) => state);

  const features = [
    "20,000+ recipes to suit all tastes and skill levels",
    "Filter for diets, cook times, and more",
    "Personal Recipe Box for favorites",
    "Get exclusive access to our subscriber-only mobile app",
  ];

  const accessCards = [
    {
      title: "Cooking",
      desc: "Enjoy recipes, advice and inspiration for any occasion.",
    },
    {
      title: "Wirecutter",
      desc: "Explore independent reviews for thousands of products.",
    },
    {
      title: "Games",
      desc: "Unwind with Spelling Bee, Wordle, The Crossword.",
    },
    {
      title: "The Athletic",
      desc: "Discover in-depth, personalized sports journalism.",
    },
  ];

  const handleSubscribe = () => {
    subscribePlan();
    if (currentRecipe) {
      navigate(`/recipes/${currentRecipe.id}`);
      return;
    }
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <HeaderLoggedIn />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <Link to="/home" className="hover:text-pink-500 transition-colors">
            Recipes
          </Link>
          <MdOutlineKeyboardArrowRight size={16} />
          <span className="text-pink-500 font-medium">Subscribe</span>
        </div>

        {/* --- Section 1: Hero Paywall --- */}
        <section className="flex flex-col md:flex-row gap-12 items-center mb-24">
          {/* Cột trái: Nội dung Text */}
          <div className="flex-1 w-full">
            <p className="font-bold text-gray-800 tracking-wide text-sm mb-3 uppercase">
              This recipe is exclusively available to subscribers
            </p>
            {currentRecipe ? (
              <p className="text-sm text-gray-500 mb-4">
                You selected:{" "}
                <span className="font-semibold text-gray-700">
                  {currentRecipe.title}
                </span>
              </p>
            ) : null}
            <h1 className="text-3xl md:text-4xl font-extrabold text-pink-500 mb-8 leading-snug">
              Join now to access effortless, hassle-free recipes
            </h1>

            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <MdCheckCircleOutline
                    className="text-yellow-500 mt-0.5 flex-shrink-0"
                    size={20}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-3xl font-extrabold text-gray-900">
                  0.25 USD
                </span>
                <span className="text-gray-600 font-medium pb-1">/ Week</span>
              </div>
              <p className="text-sm text-gray-500">
                Billed as $1 every 4 weeks for the first year
              </p>
            </div>

            <button
              onClick={handleSubscribe}
              className="w-full md:w-auto min-w-[280px] flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-3.5 font-bold shadow-md transition-all active:scale-95 mb-4"
            >
              <BiBriefcaseAlt2 size={20} />
              {isSubscribed ? "Continue Reading" : "Subscribe Now"}
            </button>
            <p className="text-xs text-pink-400 font-medium md:pl-20">
              Cancel or Pause anytime
            </p>
          </div>

          {/* Cột phải: Hình ảnh */}
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/icons.svg"
                alt="Delicious meals spread"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* --- Section 2: All Access Features --- */}
        <section className="mb-24 text-center">
          <h2 className="text-2xl font-bold text-pink-500 mb-10">
            An All Access subscription includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {accessCards.map((card, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white flex flex-col h-full"
              >
                <h3 className="font-extrabold text-gray-900 text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Section 3: Subscription Options --- */}
        <section className="max-w-xl mx-auto text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-pink-500 font-bold text-2xl mb-4">
            <span className="text-2xl bg-pink-50 p-1.5 rounded-lg">👩‍🍳</span>{" "}
            Chefify
          </div>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            Subscribe to Chefify Cooking only
          </h2>
          <p className="text-sm text-gray-600 mb-8 px-4">
            Enjoy thousands of delicious recipes for every taste, plus advice
            and inspiration daily.
          </p>

          <form className="flex flex-col gap-4 text-left px-4">
            {/* Option 1 */}
            <label className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-pink-300 transition-colors bg-white">
              <input
                type="radio"
                name="subscriptionPlan"
                value="monthly"
                defaultChecked
                className="w-5 h-5 accent-pink-500"
              />
              <span className="text-sm font-medium text-gray-800">
                $2/month (Billed every 4 weeks)
              </span>
            </label>

            {/* Option 2 */}
            <label className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-pink-300 transition-colors bg-white">
              <input
                type="radio"
                name="subscriptionPlan"
                value="yearly"
                className="w-5 h-5 accent-pink-500"
              />
              <span className="text-sm font-medium text-gray-800">
                $20/year (Billed once annually)
              </span>
            </label>

            <button
              type="button"
              onClick={handleSubscribe}
              className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-4 font-bold shadow-md transition-all active:scale-95 mt-2"
            >
              <BiBriefcaseAlt2 size={20} />
              {isSubscribed ? "Continue Reading" : "Subscribe Now"}
            </button>
            <p className="text-xs text-pink-400 font-medium text-center mt-2">
              Cancel or Pause anytime
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
