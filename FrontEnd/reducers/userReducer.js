import { logOut, signIn } from "../actions/UserActions"

const initialState = {
    user: "Guest"
};

export default userReducer = (state = initialState, action) => {
    switch(action.type){
        case signIn: 
            return { ...state, username: action.payload.username.username };

        case logOut:
            return { ...state, username: "Guest" };

        default:
            return state;
    }
}