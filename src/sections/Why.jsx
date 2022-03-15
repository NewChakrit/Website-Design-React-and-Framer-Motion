import Title from "../components/Title";
import "../styles/sections/Why.scss";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import {
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "../Animation";

function Why() {
  const [element, controls] = useScroll();
  return (
    <div className="why-container" id="services" ref={element}>
      <div className="container">
        <motion.div
          className="top"
          variants={topContainerAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Why CRYO?" color="pink" LineCenter={true} />
          <div className="subTitle">
            <p>
              Always stay updated with the technologies thus we help our clients
              by giving the best solutions for their needs.
            </p>
          </div>
        </motion.div>
        <div className="content">
          <motion.div
            className=""
            variants={videoAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="video">
              <GoPlay />
            </div>
          </motion.div>
          <motion.div
            className="reasons"
            variants={reasonsAnimation}
            animate={controls}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <ul>
              <li>
                Provide solutions to our multiple global clients or website
                traffic genration and workflow
              </li>
              <li>Strong team of 150+ creative people</li>
              <li>99% adhere to service level contract</li>
              <li>Ready to recieve service request 24/7</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Why;
