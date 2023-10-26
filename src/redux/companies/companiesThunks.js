import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../utils/axiosConfig";

// COMPANIES operations

export const getAllCompanies = createAsyncThunk(
  "companies/getAllCompanies",
  async (_, thunkAPI) => {
    try {
      const response = await axiosPrivate.get("/api/companies");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCompanyById = createAsyncThunk(
  "companies/getCompanyById",
  async (companyId, thunkAPI) => {
    try {
      const response = await axiosPrivate.get(`/api/companies/${companyId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCompany = createAsyncThunk(
  "companies/addCompany",
  async (credentials, thunkAPI) => {
    try {
      await axiosPrivate.post("/api/companies", credentials);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCompany = createAsyncThunk(
  "companies/deleteCompany",
  async (companyId, thunkAPI) => {
    try {
      await axiosPrivate.delete(`/api/companies/${companyId}`);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateCompany = createAsyncThunk(
  "companies/updateCompany",
  async ({ companyId, ...credentials }, thunkAPI) => {
    try {
      await axiosPrivate.put(`/api/companies/${companyId}`, credentials);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
