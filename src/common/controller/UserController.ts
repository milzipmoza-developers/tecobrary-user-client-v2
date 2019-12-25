import * as UserService from "../service/UserService";

const authUser = async (code: any) => {
    const response = await UserService.authUser(code);
    return response.data;
};

export const userController = {
    authUser,
};