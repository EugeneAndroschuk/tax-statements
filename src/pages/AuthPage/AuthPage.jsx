
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleAuth } from "../../redux/auth/authThunks";
import { setToken } from "../../redux/auth/authSlice";
import Loader from "../../components/Loader/Loader";
import Container from "../../styles/Container";
import { getUserIsRefreshing } from "../../redux/auth/authSelectors";
import {
  AuthPageWrap,
  OutletWrap,
  AuthTextWrap,
  AuthPageTitle,
  AuthPageText,
} from "./AuthPage.styled";


const AuthPage = () => {
  const [searchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { token } = params;
  const dispatch = useDispatch();
  // const isUserRefreshing = useSelector(getUserIsRefreshing);
  const isUserRefreshing = false;

  useEffect(() => {
    if (token) {
      dispatch(setToken({ token }));
      dispatch(googleAuth(token));
    }
  }, [dispatch, token]);

  return (
    <AuthPageWrap>
      <Container>
        {isUserRefreshing ? (
          <Loader />
        ) : (
          <OutletWrap>
            <AuthTextWrap>
              <AuthPageTitle>Tax statements</AuthPageTitle>
              <AuthPageText>VAT Declarations</AuthPageText>
            </AuthTextWrap>

            <Outlet />
          </OutletWrap>
        )}
      </Container>
    </AuthPageWrap>
  );
};

export default AuthPage;
