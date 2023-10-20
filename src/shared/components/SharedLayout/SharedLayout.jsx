import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Container from "../../../styles/Container";
import Header from "../../../components/Header/Header";
import { SharedLayoutWrap } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
      <SharedLayoutWrap>
        <Header/>
        <main>
          <Outlet />
        </main>
      </SharedLayoutWrap>
    );
}

export default SharedLayout;