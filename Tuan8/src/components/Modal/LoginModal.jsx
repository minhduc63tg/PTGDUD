import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
export default function LoginModal({ isOpen, onClose, onSwitchToSignUp }) {
  const navigate = useNavigate();
  const { login, authError, clearAuthError } = useAuthStore((state) => state);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (success) {
      onClose();
      navigate("/home");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      {/* Modal Container: Max width lớn hơn để chứa 2 cột */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full max-w-[850px] min-h-[500px] relative animate-in fade-in zoom-in-95 duration-200">
        {/* Nút Close (X) dùng chung - đặt absolute ở góc trên bên phải của modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-800 bg-white/80 hover:bg-gray-100 rounded-full p-2 transition-colors"
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

        {/* Cột trái: Hình ảnh & Quote (Ẩn trên mobile, hiện trên màn hình md trở lên) */}
        <div className="hidden md:block md:w-1/2 relative bg-teal-50">
          <img
            src="/loginart.png"
            alt="Cooking art"
            className="w-full h-full object-cover"
          />
          {/* Lớp overlay làm tối ảnh một chút để chữ nổi bật hơn (tùy chọn) */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Text Overlay */}
          <div className="absolute top-1/4 left-0 w-full px-8 text-center drop-shadow-md">
            <h3 className="text-white text-2xl font-bold leading-snug tracking-wide">
              "Embrace the art of
              <br />
              cooking, where flavors
              <br />
              come alive!"
            </h3>
          </div>
        </div>

        {/* Cột phải: Form Đăng nhập */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col bg-white">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Log in</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your account to log in.
          </p>

          <form className="flex flex-col gap-4 mb-6" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, email: e.target.value }));
                if (authError) clearAuthError();
              }}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 transition-all placeholder:text-gray-400 text-sm"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, password: e.target.value }));
                if (authError) clearAuthError();
              }}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 transition-all placeholder:text-gray-400 text-sm"
              required
            />
            {authError ? (
              <p className="text-sm text-red-500 -mt-2">{authError}</p>
            ) : null}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-3 font-semibold text-sm transition-colors"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-2 mb-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="px-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
              OR
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Terms Text */}
          <p className="text-[11px] text-gray-500 text-center mb-6 leading-relaxed">
            By continuing, you agree to the updated{" "}
            <a href="#" className="underline hover:text-gray-700">
              Terms of Sale
            </a>
            ,{" "}
            <a href="#" className="underline hover:text-gray-700">
              Terms of Service
            </a>
            , and{" "}
            <a href="#" className="underline hover:text-gray-700">
              Privacy Policy
            </a>
            .
          </p>

          {/* Social Logins */}
          <div className="flex flex-col gap-3 mt-auto">
            <button className="flex items-center justify-center w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-xl py-2.5 text-sm font-medium transition-colors">
              <span className="mr-2 text-red-500 font-bold">G</span> Continue
              with Google
            </button>
            <button className="flex items-center justify-center w-full bg-[#f4f7fe] hover:bg-[#e2e8f0] text-blue-800 rounded-xl py-2.5 text-sm font-medium transition-colors">
              <span className="mr-2 font-bold">f</span> Continue with Facebook
            </button>
            <button className="flex items-center justify-center w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-800 rounded-xl py-2.5 text-sm font-medium transition-colors">
              <span className="mr-2 text-lg leading-none"></span> Continue with
              Apple
            </button>
          </div>
          <p className="text-sm text-gray-600 text-center mt-6">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => {
                clearAuthError();
                onClose();
                onSwitchToSignUp?.();
              }}
              className="text-pink-500 font-semibold hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
