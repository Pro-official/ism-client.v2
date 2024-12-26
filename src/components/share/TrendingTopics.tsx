// NewsletterForm.jsx
import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    if (!email) {
      setMessage("Please enter your email address");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      // In real scenario you will make a API call to subscribe
      console.log("subscribed email:", email);
      setMessage("Thank you for Subscribing!");
      setEmail("");

      // Example api call

      //     const response = await fetch('YOUR_API_ENDPOINT', {
      //           method: 'POST',
      //           headers: {
      //            'Content-Type': 'application/json',
      //           },
      //          body: JSON.stringify({email})
      //       });
      //       if(!response.ok){
      //           const message = await response.text();
      //          throw new Error(`HTTP error! Status: ${response.status}, ${message}`);
      //      }
      //       setMessage("Thank you for Subscribing!");
      //    setEmail("");
    } catch (error) {
      let errorMessage = `Failed to subscribe with ${email}`;
      if (error instanceof Error) {
        errorMessage = `${errorMessage}, ${error.message}`;
      } else if (typeof error === "string") {
        errorMessage = `${errorMessage}, ${error}`;
      } else {
        errorMessage = `${errorMessage}, ${JSON.stringify(error)}`;
      }
      setMessage(errorMessage);
    }
  };

  return (
    <div className="bg-black/10 backdrop-blur-lg rounded-xl mt-10 shadow-sm hover:shadow-lg p-6 border border-green-400">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="h-6 w-6 text-green-400" />
        <h2 className="text-xl font-bold text-white/90">Stay Updated</h2>
      </div>
      {message && (
        <p className="mb-4 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500">
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2.5 rounded-lg bg-black/5 border border-white/10 text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white/90 font-bold transition-all flex items-center justify-center gap-2"
        >
          <Send className="h-5 w-5" /> Subscribe
        </button>
      </form>
    </div>
  );
}
