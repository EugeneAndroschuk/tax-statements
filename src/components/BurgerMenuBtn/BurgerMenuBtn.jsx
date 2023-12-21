import { motion } from "framer-motion";
import {Wrap } from "./BurgerMenuBtn.styled";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="rgb(252, 107, 3)"
    strokeLinecap="round"
    {...props}
  />
);

const BurgerMenuBtn = ({ toggle, isMobileMenuOpen }) => (
  <Wrap
    initial={false}
    animate={isMobileMenuOpen ? "open" : "closed"}
    onClick={toggle}
  >
    <svg width="35" height="35" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </Wrap>
);

export default BurgerMenuBtn;