import { motion } from "framer-motion";

function Trans() {
  return (
    <motion.div
      className="box"
      style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    >
    </motion.div>
  );
}

export default Trans;