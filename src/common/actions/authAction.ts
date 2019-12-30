import {ILoginInfo} from "../types/ILoginInfo";
import {IUserInfo} from "../types/IUserInfo";

export const LOGIN = 'login/LOGIN';
export const LOGOUT = 'login/LOGOUT';

interface ILoginAction {
    payload: ILoginInfo;
    type: typeof LOGIN;
}

interface ILogoutAction {
    payload: ILoginInfo;
    type: typeof LOGOUT;
}

export type AuthActionTypes = ILoginAction | ILogoutAction;

const login = (user: IUserInfo, token: string) => {
    return {
        payload: {
            isLoggedIn: true,
            token,
            user,
        },
        type: LOGIN,
    }
};

const logout = () => {
    return {
        payload: {
            isLoggedIn: false,
            token: undefined,
            user: undefined,
        },
        type: LOGOUT,
    }
};

export const authAction = {
    login,
    logout,
};
