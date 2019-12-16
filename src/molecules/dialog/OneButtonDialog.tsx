import * as React from "react";
import DialogBackground from "../../atoms/dialog/DialogBackground";
import DialogBodyFrame from "../../atoms/dialog/DialogBodyFrame";
import DialogButton from "../../atoms/dialog/DialogButton";
import DialogFooter from "../../atoms/dialog/DialogFooter";
import DialogFrame from "../../atoms/dialog/DialogFrame";
import DialogHeader from "../../atoms/dialog/DialogHeader";
import DialogWrapper from "../../atoms/dialog/DialogWrapper";
import {colorProps, dialogMode} from "../../common/types";
import {modeConverter} from "../../common/utils/DialogMode";

interface IProps {
    mode: dialogMode;
    title: string;
    color: colorProps;
    buttonText: string;
    buttonOnClick: string;
    children: any;
}

const OneButtonDialog = (props: IProps) => (
    <DialogBackground>
        <DialogWrapper>
            <DialogFrame>
                <DialogHeader backgroundColor={modeConverter(props.mode)}>{props.title}</DialogHeader>
                <DialogBodyFrame>
                    {props.children}
                </DialogBodyFrame>
                <DialogFooter>
                    <DialogButton color={props.color} onClick={props.buttonOnClick}>{props.buttonText}</DialogButton>
                </DialogFooter>
            </DialogFrame>
        </DialogWrapper>
    </DialogBackground>
);

export default OneButtonDialog;