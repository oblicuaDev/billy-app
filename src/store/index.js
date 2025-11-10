import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./reducers";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
