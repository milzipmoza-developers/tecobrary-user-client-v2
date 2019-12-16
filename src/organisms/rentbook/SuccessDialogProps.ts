import {IBookInfo} from "../../common/types";
import {ISuccessDialogProps} from "./ISuccessDialogProps";

export class SuccessDialogProps implements ISuccessDialogProps {
    public bookInfo: IBookInfo | null;
    public serial: number;
    public confirmButtonHandler: any;
    public cancelButtonHandler: any;

    constructor(bookInfo: IBookInfo | null, serial: number, confirmButtonHandler: any, cancelButtonHandler: any) {
        this.bookInfo = bookInfo;
        this.serial = serial;
        this.confirmButtonHandler = confirmButtonHandler;
        this.cancelButtonHandler = cancelButtonHandler;
    }
}