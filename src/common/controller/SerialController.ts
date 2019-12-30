import {SerialService} from "../service/SerialService"
import {ISerial} from "../types";

const findBookBySerialNumber = async (serial: ISerial) => {
    const response = await SerialService.getBookBySerialNumber(serial.serial);
    return response.data;
};

const findSerialsByBookId = async (bookId: number) => {
    const response = await SerialService.getSerialsByBookId(bookId);
    return response.data;
};

export const serialController = {
    findBookBySerialNumber,
    findSerialsByBookId,
};