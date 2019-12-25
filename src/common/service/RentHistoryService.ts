import base from "./Api";

const getRentListByUserId = (userId: number) => (
    base().get(`rents/${userId}`)
);

const rentBook = (userId: number, serial: number) => (
    base().post('rents', {userId, serial})
);

const getReturnListByUserId = (userId: number) => (
    base().get(`histories/${userId}`)
);

const returnBook = (userId: number, serial: number) => (
    base().patch('rents', {userId, serial})
);

export const rentHistoryService = {
    getRentListByUserId,
    getReturnListByUserId,
    rentBook,
    returnBook,
};
