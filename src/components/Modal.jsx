import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

const nextVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "calc(50vh - 50%)",
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      mass: 0.6,
      stiffness: 90,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  useEffect(() => {
    return () => {
      setShowModal(false);
    };
  }, [setShowModal]);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={nextVariants}>
            <p>Want to make another Pizza</p>

            <Link to="/">
              <button>Start Again </button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
