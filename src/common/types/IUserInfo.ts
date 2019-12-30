import {authLevel} from "./index";

export interface IUserInfo {
    id: number;
    email: string;
    name: string;
    avatarUrl: string;
    authorization: authLevel;
}
