import { LOG_OUT, SIGN_IN } from "./action";

const initialState = {
  username: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const { username } = action.payload;
      return { ...state, username: username };
    }
    case LOG_OUT: {
      return { ...state, username: null };
    }
    default:
      return state;
  }
};
export default userReducer;
