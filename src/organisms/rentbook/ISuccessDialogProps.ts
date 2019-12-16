import {IBookInfo} from "../../common/types";

export interface ISuccessDialogProps {
    bookInfo: IBookInfo | null;
    serial: number;
    confirmButtonHandler: any;
    cancelButtonHandler: any;
}