import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCompany } from "../../../redux/companies/companiesThunks";
import CloseIcon from "@mui/icons-material/Close";
import {
  ModalWrap,
  FormStyled,
  FormTitleStyled,
  ListStyled,
  ItemStyled,
  LabelStyled,
  InpuStyled,
  SubmitBtnStyled,
} from "./ModalAddCompany.styled";


const ModalAddCompany = ({ toggleModal }) => {
  const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmitForm = (data) => {
        // const { email, password } = data;
        console.log(data)
      dispatch(addCompany(data));
      toggleModal();
    };

  return (
    <ModalWrap>
      <CloseIcon
        onClick={toggleModal}
        sx={{
          cursor: "pointer",
          position: "absolute",
          top: "16px",
          right: "16px",
        }}
      />

      <FormStyled onSubmit={handleSubmit((data) => onSubmitForm(data))}>
        <FormTitleStyled>New Company</FormTitleStyled>
        <ListStyled>
          <ItemStyled>
            <LabelStyled htmlFor="name">Name</LabelStyled>
            <InpuStyled
              type="text"
              {...register("name", { required: true })}
              placeholder={"Company name"}
            />
          </ItemStyled>
          <ItemStyled>
            <LabelStyled htmlFor="regcode">Registration code</LabelStyled>
            <InpuStyled
              type="text"
              {...register("regCode", {
                required: "You must specify a password",
                minLength: {
                  value: 8,
                  message: "Password must have at least 6 characters",
                },
              })}
              placeholder={"Registration code"}
            />
          </ItemStyled>
          <ItemStyled>
            <LabelStyled htmlFor="taxcode">Tax code</LabelStyled>
            <InpuStyled
              type="text"
              {...register("taxCode", {
                required: true,
              })}
              placeholder={"Tax code"}
            />
          </ItemStyled>
          <ItemStyled>
            <LabelStyled htmlFor="address">Address</LabelStyled>
            <InpuStyled
              type="text"
              {...register("address", {
                required: true,
              })}
              placeholder={"Address"}
            />
          </ItemStyled>
        </ListStyled>
        <SubmitBtnStyled type="submit">Add company</SubmitBtnStyled>
      </FormStyled>
    </ModalWrap>
  );
};

ModalAddCompany.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ModalAddCompany;
