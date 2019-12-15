import * as React from "react";
import {colorProps, textAlignProps} from "../common/types";

interface IProps {
    color: colorProps;
    onClick: any;
    children: string;
}

const buttonStyle = (color: colorProps, textAlign: textAlignProps) => ({
    color,
    cursor: 'pointer',
    flex: 1,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '44px',
    textAlign,
});

const DialogButton = ({color, onClick, children}: IProps) => (
    <div style={buttonStyle(color, 'center')} onClick={onClick}>
        {children}
    </div>
);

export default DialogButton;