import * as React from "react";
import {colorProps} from "../../common/types";
import DialogTitle from "./DialogTitle";

interface IProps {
    backgroundColor: colorProps;
    children: string;
}

const headerStyle = (backgroundColor: colorProps) => ({
    backgroundColor,
    borderRadius: '10px 10px 0px 0px',
    height: '50px',
});

const DialogHeader = ({backgroundColor, children}: IProps) => (
    <div style={headerStyle(backgroundColor)}>
        <DialogTitle>{children}</DialogTitle>
    </div>
);

export default DialogHeader;