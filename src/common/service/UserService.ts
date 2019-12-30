import base from "./Api";

export const updateUserName = (id: number, newName: string) => (
    base().patch('users', {id, newName})
);

export const authUser = (code: string) => (
    base().get('auth/user', {
        params: {code}
    })
);