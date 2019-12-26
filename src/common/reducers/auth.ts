import {AuthActionTypes, LOGIN, LOGOUT} from "../actions/authAction";
import {IUserInfo} from "../types/IUserInfo";

export interface IUserAuthState {
    isLoggedIn: boolean;
    token: string | null;
    user: IUserInfo | null;
}

const initialState: IUserAuthState = {
    isLoggedIn: false,
    token: null,
    user: null,
};

export const auth = (state = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: true,
                token: action.payload.token,
                user: action.payload.user,
            };
        case LOGOUT:
            return {
                isLoggedIn: false,
                token: null,
                user: null,
            };
        default:
            return state;
    }
};