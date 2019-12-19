import base from "./Api";

const getSerialsByBookId = (bookId: number) => (
    base().get('serials', {
        params: {bookId}
    })
);

const getBookBySerialNumber = (serialNumber: number) => (
    base().get(`serials/${serialNumber}`)
);

export const SerialService = {
    getBookBySerialNumber,
    getSerialsByBookId,
};