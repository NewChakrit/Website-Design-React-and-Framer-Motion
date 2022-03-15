import React from "react";
import WorkImage from "../assets/work.svg";
import Button from "../components/Button";
import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../styles/sections/Starter.scss";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { headerAnimation, imageAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";

function Starter() {
  const [element, controls] = useScroll();
  return (
    <div className="main-container" ref={element}>
      <Navbar />
      <div className="container">
        <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <h1>
            We Provide Solutions to Help You to Build or Grow Your Bussiness!
          </h1>
          <p>
            A professional web and mobile app developent agency with over 100+
            web and app developed. We provide a high-quality service in web and
            mobile app development as well as design.
          </p>
          <div className="button-container">
            <Button content="Watch Video" icon={<GoPlay />} />
            <Button
              content="Request Quote"
              icon={<HiOutlineArrowNarrowRight />}
              color="pink"
            />
          </div>
        </motion.div>
        <motion.div
          className="image"
          variants={imageAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <img src={WorkImage} alt="Work Image" />
        </motion.div>
      </div>
    </div>
  );
}

export default Starter;
