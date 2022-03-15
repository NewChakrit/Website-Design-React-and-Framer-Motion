import "../styles/components/Card.scss";
import { cardAnimation } from "../Animation";
import { motion } from "framer-motion";

function Card({ Logo, title, animateCustom }) {
  return (
    <motion.div
      className="card"
      variants={cardAnimation}
      animate={animateCustom}
      transition={{ stiffness: 5000 }}
    >
      <div className="logo">{Logo}</div>
      <div className="card-title">
        <h4>{title}</h4>
      </div>
    </motion.div>
  );
}

export default Card;
