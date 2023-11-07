import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate } from "../../utils/axiosConfig";

// VATDeclarations operations

export const getAllVatDeclarations = createAsyncThunk(
  "vatDeclarations/getAllVatDeclarations",
  async (_, thunkAPI) => {
    try {
      const response = await axiosPrivate.get("/api/vatDeclarations");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getVatDeclarationsByCompany = createAsyncThunk(
  "vatDeclarations/getVatDeclarationsByCompany",
  async (companyId, thunkAPI) => {
    try {
      const response = await axiosPrivate.get(
        `/api/vatDeclarations?companyId=${companyId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getVatDeclarationById = createAsyncThunk(
  "vatDeclarations/getVatDeclarationById",
  async (vatDeclarationId, thunkAPI) => {
    try {
      const response = await axiosPrivate.get(
        `/api/vatDeclarations/${vatDeclarationId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addVatDeclaration = createAsyncThunk(
  "vatDeclarations/addVatDeclaration",
  async (credentials, thunkAPI) => {
      try {
      await axiosPrivate.post("/api/vatDeclarations", credentials);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteVatDeclaration = createAsyncThunk(
  "vatDeclarations/deleteVatDeclaration",
  async (vatDeclarationId, thunkAPI) => {
    try {
      await axiosPrivate.delete(`/api/vatDeclarations/${vatDeclarationId}`);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateVatDeclaration = createAsyncThunk(
  "vatDeclarations/deleteVatDeclaration",
  async ({ vatDeclarationId, ...credentials }, thunkAPI) => {
    try {
      await axiosPrivate.put(
        `/api/vatDeclarations/${vatDeclarationId}`,
        credentials
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
