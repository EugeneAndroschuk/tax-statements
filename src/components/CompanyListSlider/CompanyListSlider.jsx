
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { getAllCompaniesSelector } from "../../redux/companies/companiesSelectors";
import CompanyItem from "../CompanyItem/CompanyItem";
import {
  Wrap,
  WrapAnimation,
  List,
  Bullet,
  Arrow,
  Slider,
  Flex,
  MotionBox,
} from "./CompanyListSlider.styled";


 
  
  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
};
  
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const MotionSlider = () => {
  const { allCompanies: content } = useSelector(getAllCompaniesSelector);

  const [[page, direction], setPage] = useState([0, 0]);
  const [activeBullet, setActiveBullet] = useState(0);
  
  const i = wrap(0, content.length, page);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (page + 1 < content.length && page + 1 >= 0) {
        setPage([page + 1, 0]);
        setActiveBullet(page + 1);
      } else if (page + 1 === content.length) {
        setPage([0, 0]);
        setActiveBullet(0);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  
  }, [content.length, page]);

    const paginate = (newDirection) => {
      if (page + newDirection < content.length && page + newDirection >= 0) {
        setPage([page + newDirection, 0]);
        setActiveBullet(page + newDirection);
      } else if (page + newDirection === content.length) {
        setPage([0, 0]);
        setActiveBullet(0);
      } else if (page + newDirection === -1) {
        setPage([content.length - 1, 0]);
        setActiveBullet(content.length - 1);
      }
    };

    return (
      <Wrap>
        <WrapAnimation>
          <AnimatePresence initial={false} custom={direction}>
            <MotionBox
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              // exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                delay: 0.3,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              {/* <Slider> */}
              {content.length > 0 && <CompanyItem company={content[i]} />}
              {/* </Slider> */}
            </MotionBox>
          </AnimatePresence>
        </WrapAnimation>
        <Flex>
          {/* <Arrow onClick={() => paginate(-1)} /> */}

          {content.map((item, id) => (
            <Bullet
              key={id}
              onClick={() => {
                setPage([id, 0]);
                setActiveBullet(id);
              }}
              $bg={activeBullet === id ? "white" : "none"}
            />
          ))}

          {/* <Arrow onClick={() => paginate(1)} /> */}
        </Flex>
      </Wrap>
    );
  };