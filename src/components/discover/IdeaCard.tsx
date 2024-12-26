import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { truncateText } from "../../utils/text";
import { Idea } from "../../types/Idea";

type IdeaCardProps = Idea;

export default function IdeaCard({
  title,
  content,
  // banner,
  author,
  createdAt,
}: IdeaCardProps) {
  // const [authorData, setAuthorData] = useState<User | undefined>(undefined);

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetch(
        `https://ism-serverv2.onrender.com/api/users/${author}`
      );

      if (!response.ok) {
        const message = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, ${message}`);
      }
    } catch (error: unknown) {
      console.error("Failed to fetch author data", error);
    }
  }, [author]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-xl overflow-hidden bg-black/10 border hover:shadow-md border-green-400"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-0 transition-opacity" />
      </div>

      <div className="p-6">
        <div className="flex content-center justify-between">
          <h3 className="text-xl font-bold text-white/90 mb-2">
            {truncateText(title, 35)}
          </h3>
          <p className="text-xs font-light text-white/90">
            {createdAt &&
              formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </p>
        </div>
        <div
          className="text-white/90 mb-4"
          dangerouslySetInnerHTML={{ __html: truncateText(content, 100) }}
        />
      </div>
    </motion.div>
  );
}
