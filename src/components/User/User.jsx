import { useSelector } from "react-redux";
import { getUserName, getUserEmail } from "../../redux/auth/authSelectors";
import { useResize } from "../../utils/useResize";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { UserWrap, UserName, UserEmail } from "./User.styled";

const User = () => {
    const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const { isScreenPhone, isScreenTablet, isScreenDesktop } = useResize();

  return (
    <UserWrap>
      <AssignmentIndIcon fontSize="large" sx={{ color: !isScreenDesktop ? "black" : "white"}} />
      <div>
        <UserName>{userName}</UserName>
        <UserEmail>{userEmail}</UserEmail>
      </div>
    </UserWrap>
  );
};

export default User;
