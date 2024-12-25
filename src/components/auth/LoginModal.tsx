import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      onClose();
      navigate("/", { replace: true });
    } catch (err) {
      setError(`Invalid email or password, ${err}`);
    }
  };

  return (
    <div className="p-8 bg-black/10 border">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white/90 mb-2">Welcome Back</h1>
        <p className="text-gray-400">Sign in to continue to IdeaHub</p>
      </div>

      {error && (
        <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white/90 mb-2"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#001F3F] border border-white/50 text-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-white/90 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#001F3F] border border-white/50 text-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white/90 font-bold transition-all flex items-center justify-center gap-2"
        >
          <LogIn className="h-5 w-5" />
          Sign In
        </button>
      </form>

      <p className="mt-6 text-center text-white/90">
        Don't have an account?{" "}
        <button
          onClick={onClose}
          className="text-green-500 hover:text-green-600 font-bold"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
