import Button from "../components/Button";
import Title from "../components/Title";
import BlogImage1 from "../assets/blogImage1.jpg";
import BlogImage2 from "../assets/blogImage2.jpg";
import BlogImage3 from "../assets/blogImage3.jpg";
import "../styles/sections/Blogs.scss";
import Blog from "../components/Blog";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import { textAnimation, cardAnimation } from "../Animation";

function Blogs() {
  const [element, controls] = useScroll();
  return (
    <div className="blogs-container" id="blog" ref={element}>
      <div className="container">
        <motion.div
          className="title-container"
          variants={textAnimation}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Title title="Blogs" color="pink" LineCenter={true} />
          <p>Insights and advice from our experts.</p>
        </motion.div>
        <div className="blogs">
          <Blog
            image={BlogImage1}
            variants={cardAnimation}
            animate={controls}
            title="Top list of Mistake to Avoid During MVP Development"
            subTitle="When there appears an idea to create a startup, have to take into account  all the risks you will face and evakute them throughfull. Also as a rule..."
          />
          <Blog
            image={BlogImage2}
            variants={cardAnimation}
            animate={controls}
            title="A Day the life on an Engineering Manager"
            subTitle="During the eight years I spent as an engineering manager, I regularty tracked how I spent mt time. As a startup engineering manager. I was..."
          />
          <Blog
            image={BlogImage3}
            variants={cardAnimation}
            animate={controls}
            title="How to Build a Strong remote Work Culture"
            subTitle="Kishan Sheth is the company VP of Talent Operations responsible for matching some of the world's greatest freelancers with compamies who..."
          />
        </div>
        <div className="button-container">
          <Button content="View All" />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
