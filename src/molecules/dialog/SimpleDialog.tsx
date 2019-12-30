import * as React from "react";
import DialogBackground from "../../atoms/dialog/DialogBackground";
import DialogBodyFrame from "../../atoms/dialog/DialogBodyFrame";
import DialogButton from "../../atoms/dialog/DialogButton";
import DialogFooter from "../../atoms/dialog/DialogFooter";
import DialogFrame from "../../atoms/dialog/DialogFrame";
import DialogHeader from "../../atoms/dialog/DialogHeader";
import DialogWrapper from "../../atoms/dialog/DialogWrapper";
import VDivider from "../../atoms/VDivider";
import {TEXT_BUTTON_GREEN, TEXT_BUTTON_RED} from "../../common/colors";
import {dialogMode} from "../../common/types";
import {modeConverter} from "../../common/utils/DialogMode";

interface IProps {
    title: string;
    mode: dialogMode;
    children: any;
    cancelOnClick: any;
    confirmOnClick: any;
}

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
                    <DialogButton color={TEXT_BUTTON_GREEN} onClick={props.confirmOnClick}>확인</DialogButton>
                </DialogFooter>
            </DialogFrame>
        </DialogWrapper>
    </DialogBackground>
);

export default SimpleDialog;