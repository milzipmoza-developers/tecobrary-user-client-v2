import {IErrorDialogProps} from "./IErrorDialogProps";

export class ErrorDialogProps implements IErrorDialogProps {
    public message: string;
    public buttonOnClick: any;

    constructor(message: string, buttonOnClick: any) {
        this.message = message;
        this.buttonOnClick = buttonOnClick;
    }
}