import * as React from "react";
import {ErrorDialogProps} from "../../organisms/rentbook/ErrorDialogProps";
import {IErrorDialogProps} from "../../organisms/rentbook/IErrorDialogProps";
import {ISuccessDialogProps} from "../../organisms/rentbook/ISuccessDialogProps";
import RentBookErrorDialog from "../../organisms/rentbook/RentBookErrorDialog";
import RentBookSuccessDialog from "../../organisms/rentbook/RentBookSuccessDialog";
import {SuccessDialogProps} from "../../organisms/rentbook/SuccessDialogProps";

interface IProps {
    dialogProps: ISuccessDialogProps | IErrorDialogProps | undefined;
}

const RentBookDialog = ({dialogProps}: IProps) => {

    const Dialog = () => {
        if (dialogProps instanceof SuccessDialogProps) {
            return (
                <RentBookSuccessDialog
                    bookInfo={dialogProps.bookInfo}
                    serial={dialogProps.serial}
                    confirmButtonHandler={dialogProps.confirmButtonHandler}
                    cancelButtonHandler={dialogProps.cancelButtonHandler}/>
            )
        } else if (dialogProps instanceof ErrorDialogProps) {
            return (
                <RentBookErrorDialog
                    message={dialogProps.message}
                    buttonOnClick={dialogProps.buttonOnClick}/>
            )
        }
        return null;
    };

    return <Dialog/>;
};

export default RentBookDialog;