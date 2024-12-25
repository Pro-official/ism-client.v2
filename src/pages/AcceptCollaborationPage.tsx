import { motion } from "framer-motion";
import CollaborationTable from "../components/collaboration/CollaborationTable";

export default function AcceptCollaborationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 pb-12"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white/90 mb-2">
          Collaboration Requests
        </h1>
        <p className="text-gray-400">
          Review and manage collaboration requests for your ideas
        </p>
      </div>

      <div className="bg-black/10 backdrop-blur-lg rounded-2xl border border-white/50 p-6">
        <CollaborationTable />
      </div>
    </motion.div>
  );
}
