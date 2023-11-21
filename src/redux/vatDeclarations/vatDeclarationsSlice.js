import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getAllVatDeclarations,
  getVatDeclarationById,
  getVatDeclarationsByCompany,
  addVatDeclaration,
  deleteVatDeclaration,
  updateVatDeclaration,
} from "./vatDeclarationsThunks";
import { userLogout } from "../auth/authThunks";

const initialState = {
  updateSuccessfull: false,
  deleteSuccessfull: false,
  items: { total: null, allVatDeclarations: [] },
  isLoading: false,
  error: null,
};

export const vatDeclarationsSlice = createSlice({
  name: "vatDeclarations",
  initialState,
  reducers: {
    setUpdateSuccessfull: (state, action) => {
      state.updateSuccessfull = action.payload;
    },
    setDeleteSuccessfull: (state, action) => {
      state.deleteSuccessfull = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
          getAllVatDeclarations.pending,
          getVatDeclarationById.pending,
          getVatDeclarationsByCompany.pending,
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
          state.updateSuccessfull = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllVatDeclarations.rejected,
          getVatDeclarationById.rejected,
          getVatDeclarationsByCompany.rejected,
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
          state.updateSuccessfull = false;
          state.error = action.payload;
        }
      )
      .addMatcher(isAnyOf(getAllVatDeclarations.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(
        isAnyOf(getVatDeclarationsByCompany.fulfilled),
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addMatcher(isAnyOf(getVatDeclarationById.fulfilled), (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.allCompanies = [action.payload];
        state.items.total = 1;
      })
      .addMatcher(isAnyOf(addVatDeclaration.fulfilled), (state) => {
        state.isLoading = false;
        state.updateSuccessfull = true;
        state.error = null;
        // state.items.push(action.payload);
      })
      .addMatcher(isAnyOf(deleteVatDeclaration.fulfilled), (state) => {
        state.isLoading = false;
        state.error = null;
        state.deleteSuccessfull = true;

        // const index = state.items.findIndex(
        //   (drive) => drive._id === action.payload._id
        // );
        // state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(updateVatDeclaration.fulfilled), (state) => {
        state.isLoading = false;
        state.updateSuccessfull = true;
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
export const { setUpdateSuccessfull, setDeleteSuccessfull } =
  vatDeclarationsSlice.actions;
