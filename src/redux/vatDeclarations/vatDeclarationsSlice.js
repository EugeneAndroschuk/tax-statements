import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllVatDeclarations,
  getVatDeclarationById,
  addVatDeclaration,
  deleteVatDeclaration,
  updateVatDeclaration,
} from "./vatDeclarationsThunks";
import { userLogout } from "../auth/authThunks";

const initialState = {
  updateSuccessful: false,
  items: { total: null, allVatDeclarations: [] },
  isLoading: false,
  error: null,
};

export const vatDeclarationsSlice = createSlice({
  name: "vatDeclarations",
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
          getAllVatDeclarations.pending,
          getVatDeclarationById.pending,
          deleteVatDeclaration.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(updateVatDeclaration.pending, addVatDeclaration.pending),
        (state) => {
          state.isLoading = true;
          state.updateSuccessful = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllVatDeclarations.rejected,
          getVatDeclarationById.rejected,
          deleteVatDeclaration.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(updateVatDeclaration.rejected, addVatDeclaration.rejected),
        (state, action) => {
          state.isLoading = false;
          state.updateSuccessful = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(getAllVatDeclarations.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(isAnyOf(getVatDeclarationById.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.allCompanies = [action.payload];
        state.items.total = 1;
      })
      .addMatcher(isAnyOf(addVatDeclaration.fulfilled), (state) => {
        state.isLoading = false;
        state.updateSuccessful = true;
        state.error = null;
        // state.items.push(action.payload);
      })
      .addMatcher(isAnyOf(deleteVatDeclaration.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;

        // const index = state.items.findIndex(
        //   (drive) => drive._id === action.payload._id
        // );
        // state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(updateVatDeclaration.fulfilled), (state) => {
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

export const vatDeclarationsReducer = vatDeclarationsSlice.reducer;
export const { setUpdateSuccessful } = vatDeclarationsSlice.actions;
