import { USER_LOGIN_SUCCESS } from "../actions/ActionTypes";

const initialState = {
  user: null,
  isLogged: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    default:
      return state;
  }
};

export default UserReducer;
