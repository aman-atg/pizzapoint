import { motion, useCycle } from "framer-motion";

const loader = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],

    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },

  animateTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};
const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loader}
        animate={animation}
      ></motion.div>
      <div style={{ cursor: "pointer" }} onClick={() => cycleAnimation()}>
        Toggle Movement
      </div>
    </>
  );
};

export default Loader;
