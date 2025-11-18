// Import the necessary dependencies
import { createSelector } from "reselect";

// Define your selectors to access specific parts of the state
const selectUserSlice = (state) => state.user;
const selectRecordSlice = (state) => state.records;

export const selectUser = createSelector(
  [selectUserSlice],
  (user) => user.user
);
export const selectRecords = createSelector(
  [selectUserSlice],
  (record) => record.record
);
export const selectIsLogged = createSelector(
  [selectUserSlice],
  (user) => user.isLogged
);