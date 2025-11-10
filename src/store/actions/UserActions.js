import { Dispatch } from "@reduxjs/toolkit";
import { fetchStrapi } from "../../api/apods";
import { USER_LOGIN_SUCCESS, UserActionTypes } from "./ActionTypes";

export const userLoginSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

export const fetchUserLogin = (formValues) => async (dispatch) => {
  try {
    const data = await fetchStrapi("billy-user/login", "POST", formValues);

    if (data.user) {
      // Dispatch the success action with the data
      await dispatch(userLoginSuccess(data.user));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching user login:", error.message);
    throw error; // Rethrow the error so it can be caught in the component
  }
};

export default { fetchUserLogin };
