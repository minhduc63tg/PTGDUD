export default function Footer() {
  return (
    <footer
      className="max-w-6xl
      mx-auto bg-[#1e1e24] text-white pt-16 pb-8 px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        {/* About Us Column */}
        <div className="lg:col-span-2">
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm">
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="flex gap-2 max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2.5 rounded-lg text-sm font-semibold transition">
              Send
            </button>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h3 className="font-bold text-lg mb-4">Learn More</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Our Cooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                See Our Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Shop</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Gift Subscription
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Send Us Feedback
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Recipes</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                What to Cook This Week
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Pasta
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Dinner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Healthy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Vegetarian
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Vegan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400 transition">
                Christmas
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700/50">
        <div className="flex items-center gap-2 text-xl font-bold mb-4 md:mb-0">
          <span className="text-white text-2xl">👩‍🍳</span> Chefify
        </div>
        <div className="flex gap-6 text-xs text-gray-400">
          <span>© 2023 Chefify Company</span>
          <a href="#" className="hover:text-white transition">
            Terms of Service | Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
