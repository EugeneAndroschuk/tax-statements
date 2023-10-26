export const getAllCompaniesSelector = (state) => state.companies.items;
export const getIsLoadingSelector = (state) => state.companies.isLoading;
export const getUpdateSuccessfulSelector = (state) =>
  state.companies.updateSuccessful;
