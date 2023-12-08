
import { useEffect } from "react";
import {
  motion,
  AnimatePresence,
  stagger,
  animate,
  useAnimate,
} from "framer-motion";
import {
  MenuTitle,
  ActionsList,
  ActionBtn,
} from "./CompaniesMenuActions.styled";

const staggerMenuItems = stagger(0.2, { startDelay: 0.3 });

function useMenuAnimation() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "li",
      { opacity: 1},
      {
        duration: 0.2,
        delay: staggerMenuItems,
      }
    );
  }, [animate]);

  return scope;
}

const CompaniesMenuActions = () => {
    const scope = useMenuAnimation();

    return (
      <div>
        <MenuTitle>Company actions</MenuTitle>
        <ActionsList ref={scope}>
          <motion.li initial={{ opacity: 0 }}>
            <ActionBtn type="button">Add Company</ActionBtn>
          </motion.li>
          <motion.li initial={{ opacity: 0 }}>
            <ActionBtn type="button">Edit Company</ActionBtn>
          </motion.li>
          <motion.li initial={{ opacity: 0 }}>
            <ActionBtn type="button">Delete Company</ActionBtn>
          </motion.li>
        </ActionsList>
      </div>
    );
}

export default CompaniesMenuActions;