import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./reducers";
import logger from "redux-logger";
import RecordReducer from "./reducers/RecordReducer";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    record: RecordReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
