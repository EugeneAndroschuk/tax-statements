
import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import {
  AuthMenuWrap,
  LoginWrap,
  RegisterWrap,
  LinkStyledLogin,
  LinkStyledRegister,
} from "./AuthMenu.styled";

const AuthMenu = () => {
    const nodeRefLogin = useRef(null);
    const nodeRefRegister = useRef(null);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        setIsFirstRender(false);
    }, []);

    return (
      <AuthMenuWrap>
        <LoginWrap>
          <CSSTransition
            nodeRef={nodeRefLogin}
            in={isFirstRender}
            classNames="fadelogin"
            timeout={600}
            //   unmountOnExit
          >
            <LinkStyledLogin to="/auth/login" ref={nodeRefLogin}>
              Login
            </LinkStyledLogin>
          </CSSTransition>
        </LoginWrap>
        <RegisterWrap>
          <CSSTransition
            nodeRef={nodeRefRegister}
            in={isFirstRender}
            classNames="faderegister"
            timeout={600}
            //   unmountOnExit
          >
            <LinkStyledRegister to="/auth/register" ref={nodeRefRegister}>
              Register
            </LinkStyledRegister>
          </CSSTransition>
        </RegisterWrap>
      </AuthMenuWrap>
    );
}

export default AuthMenu;