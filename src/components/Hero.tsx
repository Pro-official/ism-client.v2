// Hero.jsx
import { Sparkles, PenSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useParallax } from "../hooks/useParallax";
import ParalaxBG from "../public/parallax-img.avif"; // Light or desaturated image recommended
import { Link } from "react-router-dom";

export default function Hero() {
  const parallaxOffset = useParallax(0.3);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black/10">
      {" "}
      {/* White background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-normal" // Adjust opacity and blend mode
        style={{
          backgroundImage: `url(${ParalaxBG})`,
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
        {" "}
        {/* Added z-index */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
            style={{
              background: "linear-gradient(to right, #333, #555)", // Darker gradient
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            // ... (rest of the h1 motion code)
          >
            Ignite Your <br /> Imagination
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {" "}
            {/* Darker text */}
            {/* ... (rest of the p motion code) */}A platform for thinkers,
            creators, and innovators. Share your vision, connect with
            like-minded individuals, and bring your ideas to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link to="/discover">
              <motion.button
                className="px-8 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white/90 transition-colors border border-gray-700 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="h-5 w-5" /> Discover
              </motion.button>
            </Link>

            <Link to="/share">
              <motion.button
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-300 text-white/90 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PenSquare className="h-5 w-5" /> Share
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
