import { Rocket, Brain, Users } from "lucide-react"; // Example icons

export default function About() {
  return (
    <section className="bg-gray-900 py-20 text-white/90">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          style={{
            background: "linear-gradient(to right, #eee, #ccc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Community */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-4 mb-4">
              <Users className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Community</h3>
            <p>
              Join a thriving network of innovators, thinkers, and creators.
            </p>
          </div>

          {/* Section 2: Innovation */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-4 mb-4">
              <Brain className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation Hub</h3>
            <p>
              A platform for groundbreaking ideas. Discover new perspectives.
            </p>
          </div>

          {/* Section 3: Launch Your Ideas */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-full p-4 mb-4">
              <Rocket className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Launchpad</h3>
            <p>
              Turn your concepts into reality. We provide the resources and
              support you need.
            </p>
          </div>
        </div>

        {/* Team (Optional) - Replace with actual team members and images */}
        {/*  <h3 className="text-2xl font-semibold mt-16 mb-6 text-center" style={{
              background: "linear-gradient(to right, #eee, #ccc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Meet the Team</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           Add Team Member components here 
        </div> */}
      </div>
    </section>
  );
}
