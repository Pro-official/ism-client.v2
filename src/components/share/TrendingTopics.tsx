import { TrendingUp } from "lucide-react";
import { topics } from "../../data/trending-topics";
import TopicCard from "./TopicCard";

export default function TrendingTopics() {
  return (
    <div className="bg-black/10 backdrop-blur-lg rounded-xl shadow-sm hover:shadow-lg p-6 border border-green-400">
      <div className="flex items-center gap-3 mb-4">
        <TrendingUp className="h-6 w-6 text-green-400" />
        <h2 className="text-xl font-bold text-white/90">What's happening</h2>
      </div>
      <div className="space-y-2">
        {topics.map((topic, index) => (
          <TopicCard key={index} {...topic} />
        ))}
      </div>
    </div>
  );
}
