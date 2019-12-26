import {authLevel} from "./index";

export interface IUserInfo {
    id: string;
    email: string;
    name: string;
    avatarUrl: string;
    authorization: authLevel;
}
