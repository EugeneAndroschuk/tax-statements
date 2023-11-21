import { Outlet, useParams, useLocation } from "react-router";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Container from "../../../styles/Container";
import Header from "../../../components/Header/Header";
import { SharedLayoutWrap, GoToTopBtn } from "./SharedLayout.styled";

const SharedLayout = () => {
  const goToTopRef = useRef(null);
  const { pathname } = useLocation();
  const shouldRenderGoToTopBtn = pathname.includes("/company")

  const scrollTo = () => {
    goToTopRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
    
  return (
    <SharedLayoutWrap>
      <div ref={goToTopRef}>
        <Header />
      </div>

      <main>
        <Outlet />
        {shouldRenderGoToTopBtn && (
          <GoToTopBtn onClick={scrollTo}>
            <ArrowUpwardIcon fontSize="large" />
          </GoToTopBtn>
        )}
      </main>
    </SharedLayoutWrap>
  );
}

export default SharedLayout;