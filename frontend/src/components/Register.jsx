// src/components/Register.jsx
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE (sticky inside this wrapper) */}
      <div className="hidden md:block md:w-1/2 relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <img
            src="/logos/register.png"
            alt="Illustration"
            className="w-2/3 object-contain"
          />
        </div>
      </div>

      {/* RIGHT FORM (scrolls normally) */}
      <div className="w-full md:w-1/2 overflow-y-auto">
        <div className="min-h-screen flex items-center justify-center py-10 px-6 backdrop-blur-sm bg-black/30 rounded-lg">
          <div className="w-full max-w-xl">
            <h1 className="text-3xl font-bold mb-2">Register for Shaurya 2025–26</h1>
            <p className="text-gray-300 mb-6">
              Become a Campus Ambassador and represent IIT Kharagpur’s annual sports fest.
            </p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
