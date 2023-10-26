import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addCompany } from "../../../redux/companies/companiesThunks";
import CloseIcon from "@mui/icons-material/Close";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
    ModalWrap,
    FormStyled,
    FormTitleStyled,
    ListStyled,
    ItemStyled,
    LabelStyled,
    InpuStyled,
    SubmitBtnStyled,
} from "./ModalAddVat.styled";

const ModalAddVat = ({ toggleModal }) => {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
//   const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    console.log(data.age);
    // dispatch(addCompany(data));
    // toggleModal();
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...register("age")}
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </ItemStyled>
        </ListStyled>
        <SubmitBtnStyled type="submit">Add company</SubmitBtnStyled>
      </FormStyled>
    </ModalWrap>
  );
};

ModalAddVat.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default ModalAddVat;
