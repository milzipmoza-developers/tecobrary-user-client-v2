import * as React from "react";
import DialogBackground from "../atoms/DialogBackground";
import DialogBodyFrame from "../atoms/DialogBodyFrame";
import DialogButton from "../atoms/DialogButton";
import DialogFooter from "../atoms/DialogFooter";
import DialogFrame from "../atoms/DialogFrame";
import DialogHeader from "../atoms/DialogHeader";
import DialogWrapper from "../atoms/DialogWrapper";
import VDivider from "../atoms/VDivider";
import {ERROR_COLOR, SUCCESS_COLOR, TEXT_BUTTON_GREEN, TEXT_BUTTON_RED} from "../common/colors";

type Mode = 'error' | 'success' | 'warning';

interface IProps {
    title: string;
    mode: Mode;
    children: any;
    cancelOnClick: any;
    confirmOnClick: any;
}

const modeConverter = (mode: Mode) => {
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