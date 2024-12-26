import React from "react";
import { BrainCircuit, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <BrainCircuit className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-green-400 to-pink-500 text-transparent bg-clip-text">
                IdeaShare
              </span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering innovators to share and collaborate on groundbreaking
              ideas.
            </p>
          </div>

          <div>
            <h3 className="text-white/90 font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white/90 transition-colors"
                >
                  Discover
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white/90 transition-colors"
                >
                  Share Ideas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white/90 transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white/90 transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/90 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white/90 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white/90 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white/90 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white/90 transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/90 font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white/90 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white/90 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white/90 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/50 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} IdeaShare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
