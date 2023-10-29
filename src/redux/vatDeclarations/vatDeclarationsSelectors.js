export const getAllVatDeclarationsSelector = (state) => state.vatDeclarations.items;
export const getIsLoadingSelector = (state) => state.vatDeclarations.isLoading;
export const getUpdateSuccessfulSelector = (state) =>
  state.vatDeclarations.updateSuccessful;
