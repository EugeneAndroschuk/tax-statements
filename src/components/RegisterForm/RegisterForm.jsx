
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { userRegister } from "../../redux/auth/authThunks";
import {
  FormWrap,
  FormStyled,
  FormTitleStyled,
  LabelStyled,
  InpuStyled,
  ListStyled,
  ItemStyled,
  SubmitBtnStyled,
  GoogleBtn,
  GoogleIcon,
  TextStyled,
  LinkStyled,
  ErrorMsg,
} from "./RegisterForm.styled";

const RegisterForm = () => {
    const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
    
    const onSubmitForm = (data) => {
        const { name, email, password } = data;
        dispatch(userRegister({ name, email, password }));
    }

  return (
    <motion.div
      // initial={{ rotateY: "90deg" }}
      // animate={{ rotateY: "0deg", transition: { duration: 0.3 } }}
      // exit={{ rotateY: "-90deg", transition: { duration: 0.3 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <FormWrap>
        <FormStyled onSubmit={handleSubmit((data) => onSubmitForm(data))}>
          <FormTitleStyled>Registration</FormTitleStyled>
          <ListStyled>
            <ItemStyled>
              <LabelStyled htmlFor="name">Name</LabelStyled>
              <InpuStyled
                {...register("name", { required: true })}
                placeholder={"Name"}
              />
            </ItemStyled>
            <ItemStyled>
              <LabelStyled htmlFor="email">Email</LabelStyled>
              <InpuStyled
                {...register("email", { required: true })}
                placeholder={"Email"}
              />
            </ItemStyled>
            <ItemStyled>
              <LabelStyled htmlFor="password">Password</LabelStyled>
              <InpuStyled
                type="password"
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
                placeholder={"Password"}
              />
              {errors.password && (
                <ErrorMsg>{errors.password.message}</ErrorMsg>
              )}
            </ItemStyled>
            <ItemStyled>
              <LabelStyled htmlFor="confirmPassword">
                Confirm password
              </LabelStyled>
              <InpuStyled
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
                placeholder={"Confirm password"}
              />
              {errors.confirmPassword && (
                <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
              )}
            </ItemStyled>
          </ListStyled>
          <SubmitBtnStyled type="submit">Register</SubmitBtnStyled>
          <GoogleBtn href="https://db-statements.onrender.com/api/users/google">
            <GoogleIcon></GoogleIcon>
            Sign In with Google
          </GoogleBtn>
          <TextStyled>
            Already have an account ?
            <LinkStyled to="/auth/login">Login</LinkStyled>
          </TextStyled>
        </FormStyled>
      </FormWrap>
    </motion.div>
  );
};

export default RegisterForm;
