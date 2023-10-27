import PropTypes from "prop-types";
import { useState, useEffect } from "react";
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

const MONTHS = [
  { name: "january", value: "01-31" },
  { name: "fabruary", value: "02-28" },
  { name: "march", value: "03-31" },
  { name: "april", value: "04-30" },
  { name: "may", value: "05-31" },
  { name: "june", value: "06-30" },
  { name: "july", value: "07-31" },
  { name: "august", value: "08-31" },
  { name: "september", value: "09-30" },
  { name: "october", value: "10-31" },
  { name: "november", value: "11-30" },
  { name: "december", value: "12-31" },
];

const ModalAddVat = ({ toggleModal }) => {
  const [month, setMonth] = useState("");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  //   const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
      setValue("year", 2023);
  }, [setValue]);

  const onSubmitForm = (data) => {
    console.log(data);
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
        <FormTitleStyled>New VAT Declaration</FormTitleStyled>
        <ListStyled>
          <ItemStyled>
            <LabelStyled htmlFor="month">Month</LabelStyled>
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              {...register("month")}
              value={month}
              label="Month"
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {MONTHS.map((month) => (
                <MenuItem key={month.name} value={`${month.value}`}>
                  {month.name}
                </MenuItem>
              ))}
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </ItemStyled>
          <ItemStyled>
            <LabelStyled htmlFor="year">Year</LabelStyled>
            <InpuStyled
              type="number"
              min="2017"
              max="2024"
              // step="1"
              // value="2017"
              {...register("year", {
                required: true,
              })}
            />
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
