import * as React from "react";
import DialogBackground from "../../atoms/dialog/DialogBackground";
import DialogBodyFrame from "../../atoms/dialog/DialogBodyFrame";
import DialogButton from "../../atoms/dialog/DialogButton";
import DialogFooter from "../../atoms/dialog/DialogFooter";
import DialogFrame from "../../atoms/dialog/DialogFrame";
import DialogHeader from "../../atoms/dialog/DialogHeader";
import DialogWrapper from "../../atoms/dialog/DialogWrapper";
import VDivider from "../../atoms/VDivider";
import {ERROR_COLOR, SUCCESS_COLOR, TEXT_BUTTON_GREEN, TEXT_BUTTON_RED} from "../../common/colors";
import {dialogMode} from "../../common/types";

interface IProps {
    title: string;
    mode: dialogMode;
    children: any;
    cancelOnClick: any;
    confirmOnClick: any;
}

const modeConverter = (mode: dialogMode) => {
    if (mode === 'error') {
        return ERROR_COLOR;
    }
    if (mode === 'success') {
        return SUCCESS_COLOR
    }
    return '#ffffff'
};

const SimpleDialog = (props: IProps) => (
    <DialogBackground>
        <DialogWrapper>
            <DialogFrame>
                <DialogHeader backgroundColor={modeConverter(props.mode)}>{props.title}</DialogHeader>
                <DialogBodyFrame>
                    {props.children}
                </DialogBodyFrame>
                <DialogFooter>
                    <DialogButton color={TEXT_BUTTON_RED} onClick={props.cancelOnClick}>취소</DialogButton>
                    <VDivider/>
                    <DialogButton color={TEXT_BUTTON_GREEN} onClick={props.confirmOnClick}>대여</DialogButton>
                </DialogFooter>
            </DialogFrame>
        </DialogWrapper>
    </DialogBackground>
);

export default SimpleDialog;