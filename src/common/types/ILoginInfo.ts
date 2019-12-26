import {IUserInfo} from "./IUserInfo";

export interface ILoginInfo {
    isLoggedIn: boolean;
    user?: IUserInfo,
    token?: string,
}