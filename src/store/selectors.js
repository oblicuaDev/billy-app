// Import the necessary dependencies
import { createSelector } from "reselect";

// Define your selectors to access specific parts of the state
const selectServiceSlice = (state) => state.service;
const selectUserSlice = (state) => state.user;
const selectPetsSlice = (state) => state.pets;

export const selectServices = createSelector(
  [selectServiceSlice],
  (service) => service.places
);

export const selectUser = createSelector(
  [selectUserSlice],
  (user) => user.user
);

export const selectIsLogged = createSelector(
  [selectUserSlice],
  (user) => user.isLogged
);
export const selectUserPets = createSelector(
  [selectPetsSlice],
  (pets) => pets.pets
);
export const selectActivePet = createSelector(
  [selectPetsSlice],
  (pets) => pets.activePet
);
