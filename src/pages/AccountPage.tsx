// AccountPage.jsx
import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LoadingSpinner from "../components/share/LoadingSpinner";
import { Idea } from "../types/Idea";

const IdeaPost = lazy(() => import("../components/share/IdeaPost"));

export default function AccountPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [postedIdeas, setPostedIdeas] = useState<Idea[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!user) navigate("/login");

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const fetchMyIdeas = useCallback(async () => {
    setLoading(true);
    try {
      if (!user?._id) {
        throw new Error("User is not authenticated");
      }
      const response = await fetch(
        `https://ism-serverv2.onrender.com/api/ideas/${user._id}/my-ideas`
      );
      if (!response.ok) {
        const message = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, ${message}`);
      }
      const data = await response.json();
      setPostedIdeas(data);
    } catch (error: unknown) {
      let errorMessage = `Failed to fetch ideas.`;
      if (error instanceof Error) {
        errorMessage = `${errorMessage} ${error.message}`;
      } else if (typeof error === "string") {
        errorMessage = `${errorMessage} ${error}`;
      } else {
        errorMessage = `${errorMessage} ${JSON.stringify(error)}`;
      }
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [user?._id]);

  useEffect(() => {
    fetchMyIdeas();
  }, [fetchMyIdeas]);

  console.log(postedIdeas, "in account page");

  return (
    <div className="min-h-screen pt-24 pb-12 bg-black/90 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          <div>
            {user?._id && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg mr-2 bg-black/10 hover:bg-black/50 text-white/90 font-semibold transition-all  border border-white/50"
              >
                Logout
              </button>
            )}
            {user?.role === "Admin" && (
              <Link to="/role-change">
                <button className="px-4 py-2 rounded-lg bg-black/10 hover:bg-black/50 font-semibold text-white/90 transition-all border border-white/50">
                  Admin
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-white/10 mb-8">
          <div className="mb-4 flex py-2 items-center gap-4">
            <p className="text-white font-bold text-sm border-2 rounded-full w-10 h-10 p-2 flex items-center justify-center bg-gradient-to-r from-[#001F3F] to-[#3A6D8C]">
              {user?.name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-white/90">
                {" "}
                {user?.name}
              </h2>
              <p className="text-gray-300"> {user?.email}</p>
              <p className="text-gray-300">Role: {user?.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4"></div>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-white/90">
          My Posted Ideas
        </h2>
        {error && (
          <p className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
            {error}
          </p>
        )}
        <Suspense fallback={<LoadingSpinner />}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            postedIdeas
              .map((idea) => (
                <Link key={idea._id} to={`/idea/${idea._id}`}>
                  <IdeaPost {...idea} />
                </Link>
              ))
              .reverse()
          )}
        </Suspense>
      </div>
    </div>
  );
}
