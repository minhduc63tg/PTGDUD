// src/pages/WelcomePage
import { useState } from "react";
import Header from "../components/Header";
import LoginModal from "../components/Modal/LoginModal";
import SignUpModal from "../components/Modal/SignUpModal";
import OnboardingModal from "../components/Modal/OnboardingModal";

export default function WelcomePage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(
    () => !localStorage.getItem("hasSeenOnboarding"),
  );

  return (
    <div
      className="max-w-6xl
      mx-auto min-h-screen bg-gray-50 flex flex-col font-sans"
    >
      <Header
        onLoginClick={() => setIsLoginOpen(true)}
        onSignUpClick={() => setIsSignUpOpen(true)}
      />

      <main className="relative flex-1 flex items-center p-8 lg:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./background1.png"
            alt="Kitchen background"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 w-full max-w-sm bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl ml-0 lg:ml-12 border border-white/20">
          <h1 className="text-4xl font-extrabold text-pink-500 mb-4">Salad</h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Classic Italian Salad Caprese: fresh mozzarella, tomatoes, and basil
            create a refreshing dish.
          </p>
          <button
            onClick={() => setIsSignUpOpen(true)}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors w-max"
          >
            Join Chefify Now
          </button>
        </div>
      </main>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignUp={() => {
          setIsLoginOpen(false);
          setIsSignUpOpen(true);
        }}
      />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onSwitchToLogin={() => {
          setIsSignUpOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => {
          localStorage.setItem("hasSeenOnboarding", "true");
          setIsOnboardingOpen(false);
        }}
      />
    </div>
  );
}
