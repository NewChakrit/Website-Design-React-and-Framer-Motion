import Testimonial from "../components/Testimonial";
import Title from "../components/Title";
import "../styles/sections/Testimonials.scss";
import { textAnimation, cardAnimation } from "../Animation";
import { useScroll } from "../components/useScroll";
import { motion } from "framer-motion";
function Testimonails() {
  const [element, controls] = useScroll();
  return (
    <div className="testimonials-container" id="testimonial" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Testimonials" color="blue" LineCenter={true} />
          <p> See what our clients are saying about us.</p>
        </motion.div>
        <div className="testimonials">
          <Testimonial
            content="The best on the net! Software development saved my business. I use Software development often. I am really satisfied with my Software Development."
            name="Trushit Vyas"
            designation="Co-Founder"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Moblie application developer is exaclly what out business has been lacing. Ihave gotten at least 50 times the values from mobile application."
            name="Kishan Sheth"
            designation="Founder & CEO"
            variants={cardAnimation}
            animate={controls}
          />
          <Testimonial
            content="Logo Design is the next killer app. We've used logo design for the last five years. Best Product Ever! Definetly worth the investment."
            name="Romit Gandhi"
            designation="Founder"
            variants={cardAnimation}
            animate={controls}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonails;
