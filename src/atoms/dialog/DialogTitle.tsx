import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children: string;
}

const dialogTitleStyle: CSSProperties = {
    fontSize: '20px',
    lineHeight: '50px',
    paddingLeft: '16px',
};

const DialogTitle = ({children}: IProps) => (
    <div style={dialogTitleStyle}>
        {children}
    </div>
);

export default DialogTitle;