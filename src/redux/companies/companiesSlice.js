import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    getAllCompanies,
  getCompanyById,
  addCompany,
  deleteCompany,
  updateCompany,
} from "./companiesThunks";
import { userLogout } from "../auth/authThunks";

const initialState = {
  updateSuccessful: false,
  items: { total: null, allCompanies: [] },
  isLoading: false,
  error: null,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setUpdateSuccessful: (state, action) => {
      state.updateSuccessful = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          getAllCompanies.pending,
          getCompanyById.pending,
          deleteCompany.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(isAnyOf(updateCompany.pending, addCompany.pending), (state) => {
        state.isLoading = true;
        state.updateSuccessful = false;
      })
      .addMatcher(
        isAnyOf(
          getAllCompanies.rejected,
          getCompanyById.rejected,
          deleteCompany.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(updateCompany.rejected, addCompany.rejected),
        (state, action) => {
          state.isLoading = false;
          state.updateSuccessful = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(getAllCompanies.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(isAnyOf(getCompanyById.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.allCompanies = [action.payload];
        state.items.total = 1;
      })
      .addMatcher(isAnyOf(addCompany.fulfilled), (state) => {
        state.isLoading = false;
        state.updateSuccessful = true;
        state.error = null;
        // state.items.push(action.payload);
      })
      .addMatcher(isAnyOf(deleteCompany.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;

        // const index = state.items.findIndex(
        //   (drive) => drive._id === action.payload._id
        // );
        // state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(updateCompany.fulfilled), (state) => {
        state.isLoading = false;
        state.updateSuccessful = true;
        state.error = null;

        // const index = state.items.findIndex(
        //   (drive) => drive._id === action.payload._id
        // );
        // state.items.splice(index, 1, action.payload);
      })
      .addMatcher(isAnyOf(userLogout.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
        state.items = {};
      });
  },
});

export const companiesReducer = companiesSlice.reducer;
export const { setUpdateSuccessful } = companiesSlice.actions;
