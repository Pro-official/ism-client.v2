// Modal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.8 }, // Start off-screen and scaled
  visible: { opacity: 1, y: 0, scale: 1 }, // Move to center and scale up
  exit: { opacity: 0, y: -50, scale: 0.8 }, // Move back off-screen with scaling
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <div
      style={{ zIndex: 10000, left: 500, top: 50, bottom: 50 }}
      className="fixed inset-0 flex items-center justify-center"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="backdrop-blur-lg w-full h-full flex-col mx-auto items-center justify-center bg-black/10 "
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="bg-black/10 rounded-2xl shadow-xl max-w-md w-full overflow-hidden relative max-h-[90vh] overflow-y-auto" // Center position and max height
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-1 text-gray-700 rounded-full hover:bg-[#001F3F]"
              >
                <X className="h-5 w-5" />
              </button>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
