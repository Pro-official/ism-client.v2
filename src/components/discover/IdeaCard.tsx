import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { ArrowRight } from "lucide-react";
import { truncateText } from "../../utils/text";
import { convertGoogleDriveLink } from "../../utils/convertGoogleDriveLink";
import { Idea } from "../../types/Idea";
import { User } from "../../types/auth";

type IdeaCardProps = Idea;

export default function IdeaCard({
  title,
  content,
  banner,
  author,
  createdAt,
}: IdeaCardProps) {
  const [authorData, setAuthorData] = useState<User | undefined>(undefined);

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetch(
        `https://ism-server.onrender.com/api/users/${author}`
      );

      if (!response.ok) {
        const message = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, ${message}`);
      }
      const data = await response.json();
      setAuthorData(data);
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
        <img
          src={convertGoogleDriveLink(banner)}
          alt={content}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        {authorData && (
          <div className="flex items-center gap-3 mb-4">
            <p className="text-white/90 font-bold text-xs border-2 rounded-full w-8 h-8 p-2 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600">
              {authorData?.name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </p>
            <div>
              <p className="text-white/90 font-light">{authorData?.name}</p>
              <p className="text-xs font-light text-white/90">
                {createdAt &&
                  formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
        )}
        <h3 className="text-xl font-bold text-white/90 mb-2">
          {truncateText(title, 35)}
        </h3>
        <div
          className="text-white/90 mb-4"
          dangerouslySetInnerHTML={{ __html: truncateText(content, 75) }}
        />
        {content.length > 75 && (
          <button className="text-green-400 hover:text-green-300 -mt-4 inline-flex items-center gap-1">
            read more
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
