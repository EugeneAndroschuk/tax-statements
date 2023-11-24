import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addVatDeclaration } from "../../../redux/vatDeclarations/vatDeclarationsThunks";
import { updateVatDeclaration } from "../../../redux/vatDeclarations/vatDeclarationsThunks";
import { getMonthAndYear } from "../../../utils/getMonth";
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
  { name: "January", value: "01-31" },
  { name: "February", value: "02-28" },
  { name: "March", value: "03-31" },
  { name: "April", value: "04-30" },
  { name: "May", value: "05-31" },
  { name: "June", value: "06-30" },
  { name: "July", value: "07-31" },
  { name: "August", value: "08-31" },
  { name: "September", value: "09-30" },
  { name: "October", value: "10-31" },
  { name: "November", value: "11-30" },
  { name: "December", value: "12-31" },
];

const ModalAddVat = ({ toggleModal, id = null, period, revenue, vatPayable }) => {
  const [month, setMonth] = useState(()=>setInitialState());
  const dispatch = useDispatch();
  const { companyId } = useParams();

  function setInitialState() {
    if (!id) return "01-31"; else {
      const initMonth = getMonthAndYear(period).split(" ")[0];

      return MONTHS.find((month) => month.name === initMonth).value;
    }
  }

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
    
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!id) setValue("year", 2023);
    else {
      // const initMonth = getMonthAndYear(period).split(" ")[0];
      
      // setMonth(MONTHS.find((month) => month.name === initMonth).value);
      setValue("year", getMonthAndYear(period).split(" ")[1]);
      setValue("revenue", revenue);
      setValue("vatPayable", vatPayable);
    }
  }, [id, period, revenue, setValue, vatPayable]);

  const onSubmitForm = (data) => {
    const { month, year, revenue, vatPayable } = data;
    console.log(month)

    const period = month + "-" + year;

    if (!id) dispatch(
      addVatDeclaration({ period, revenue, vatPayable, company: companyId })
    ); else dispatch(
      updateVatDeclaration({
        vatDeclarationId: id,
        period,
        revenue,
        vatPayable,
        company: companyId,
      })
    );
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
              <MenuItem value="01-31">
                <em>January</em>
              </MenuItem>
              {MONTHS.map((month) => (
                <MenuItem key={month.name} value={`${month.value}`}>
                  {month.name}
                </MenuItem>
              ))}
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
          <ItemStyled>
            <LabelStyled htmlFor="revenue">Revenue</LabelStyled>
            <InpuStyled
              type="number"
              min="0"
              {...register("revenue", {
                required: true,
              })}
            />
          </ItemStyled>
          <ItemStyled>
            <LabelStyled htmlFor="">VAT payable</LabelStyled>
            <InpuStyled
              type="number"
              min="0"
              {...register("vatPayable", {
                required: true,
              })}
            />
          </ItemStyled>
        </ListStyled>
        <SubmitBtnStyled type="submit">Add Declaration</SubmitBtnStyled>
      </FormStyled>
    </ModalWrap>
  );
};

ModalAddVat.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  id: PropTypes.string,
  period: PropTypes.string,
  revenue: PropTypes.number,
  vatPayable: PropTypes.number,
};

export default ModalAddVat;
