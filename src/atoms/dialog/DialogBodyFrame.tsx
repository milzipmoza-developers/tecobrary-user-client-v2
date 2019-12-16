import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children: any;
}

const bodyStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
};

const DialogBodyFrame = ({children}: IProps) => (
    <div style={bodyStyle}>
        {children}
    </div>
);

export default DialogBodyFrame;