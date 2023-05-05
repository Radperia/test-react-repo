import { motion } from "framer-motion";

function Hexagon() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      style={{
        position: "absolute",
        left: "30%",
        top: "30%",
        transform: "translate(-50%, -50%)",
        width: "200px",
        height: "230.94px",
        backgroundColor: "#00A9E0",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    />
  );
}

export default Hexagon;
