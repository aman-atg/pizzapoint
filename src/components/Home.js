import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },

  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
