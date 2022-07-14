const SIGN_IN = "SIGN_IN";

const LOG_OUT = "LOG_OUT";

export const signIn = (username) => ({
    type: SIGN_IN,
    payload: username,
})

export const logOut = () =>({
    type: LOG_OUT,
})