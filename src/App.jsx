import About from "./sections/About";
import Starter from "./sections/Starter";
import Testimonails from "./sections/Testimonials";
import Why from "./sections/Why";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Starter />
      <About />
      <Why />
      <Testimonails />
      <Blogs />
      <Footer />
    </motion.div>
  );
}

export default App;
