import {authLevel} from "../types";
import {IUserInfo} from "../types/IUserInfo";

export class UserInfoDto implements IUserInfo {
    public id: number;
    public email: string;
    public name: string;
    public avatarUrl: string;
    public authorization: authLevel;

    constructor(id: number, email: string, name: string, avatarUrl: string, authorization: "NONE" | "USER" | "MANAGER" | "KING") {
        this.id = id;
        this.email = email;
        this.name = name;
        this.avatarUrl = avatarUrl;
        this.authorization = authorization;
    }
}