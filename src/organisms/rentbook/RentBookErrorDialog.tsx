import * as React from "react";
import CardMessageHolder from "../../atoms/CardMessageHolder";
import {TEXT_BUTTON_RED} from "../../common/colors";
import OneButtonDialog from "../../molecules/dialog/OneButtonDialog";
import {IErrorDialogProps} from "./IErrorDialogProps";

const RentBookErrorDialog = ({message, buttonOnClick}: IErrorDialogProps) => (
    <OneButtonDialog mode='error' title='문제가 있어요.' color={TEXT_BUTTON_RED} buttonText='확인'
                     buttonOnClick={buttonOnClick}>
        <CardMessageHolder>{message}</CardMessageHolder>
    </OneButtonDialog>
);

export default RentBookErrorDialog;