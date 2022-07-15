import { LOG_OUT, SIGN_IN } from "./action";

const initialState = {
    username: "Guest"
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN: 
            return {...state,
                username:action.payload}

        case LOG_OUT:
            return {...state,
                username:"Guest"}

        default:
            return state;
    }
}
export default userReducer;