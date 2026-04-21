import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";
import { useState } from "react";

export default function SignUpModal({ isOpen, onClose, onSwitchToLogin }) {
  const { register, authError, clearAuthError } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isAcceptedTerms, setIsAcceptedTerms] = useState(false);
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAcceptedTerms) return;

    const success = register(
      form.firstName,
      form.lastName,
      form.email,
      form.password,
    );

    if (success) {
      onClose();
      navigate("/home");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[500px] p-8 relative animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 transition"
        >
          <MdClose size={24} />
        </button>

        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Sign up
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Row: First Name & Last Name */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1.5">
                First name
              </label>
              <input
                type="text"
                placeholder="Input first name"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                required
                className="w-full bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1.5">
                Last name
              </label>
              <input
                type="text"
                placeholder="Input last name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                required
                className="w-full bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                if (authError) clearAuthError();
              }}
              placeholder="example.email@gmail.com"
              required
              className="w-full bg-gray-50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={form.password}
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                  if (authError) clearAuthError();
                }}
                placeholder="Enter at least 8+ characters"
                minLength={6}
                required
                className="w-full bg-gray-50 rounded-xl pl-4 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiEyeOff size={18} />
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              id="terms"
              checked={isAcceptedTerms}
              onChange={(e) => setIsAcceptedTerms(e.target.checked)}
              className="mt-1 accent-pink-500 w-4 h-4 rounded cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              By signing up, I agree with the{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Terms of Use
              </a>{" "}
              &{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          {authError ? <p className="text-sm text-red-500">{authError}</p> : null}
          {!isAcceptedTerms ? (
            <p className="text-xs text-gray-500 -mt-2">
              Vui long dong y dieu khoan de tiep tuc.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={!isAcceptedTerms}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-3.5 font-semibold text-sm transition mt-2"
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            onClick={() => {
              clearAuthError();
              onSwitchToLogin();
            }}
            className="text-pink-500 font-medium hover:underline"
          >
            Log in
          </button>
        </p>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-3 text-xs text-gray-400 font-medium uppercase">
            OR
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center bg-[#d93025] hover:bg-red-700 text-white rounded-full transition-transform hover:scale-105">
            <FaGoogle size={20} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-[#1877f2] hover:bg-blue-700 text-white rounded-full transition-transform hover:scale-105">
            <FaFacebookF size={20} />
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-gray-900 hover:bg-black text-white rounded-full transition-transform hover:scale-105">
            <FaApple size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
