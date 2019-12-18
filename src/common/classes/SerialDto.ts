import {ISerial} from "../types";

export class SerialDto implements ISerial {
    public static emptyInit = () => {
        return new SerialDto(-1, false);
    };

    public serial: number;
    public status: boolean;

    constructor(serial: number, status: boolean) {
        this.serial = serial;
        this.status = status;
    }
}