import base from "./Api";

const rentBook = (userId: number, serial: number) => (
    base().post('rents', {userId, serial})
);

const returnBook = (userId: number, serial: number) => (
    base().patch('rents', {userId, serial})
);

export const rentHistoryService = {
    rentBook,
    returnBook,
};
