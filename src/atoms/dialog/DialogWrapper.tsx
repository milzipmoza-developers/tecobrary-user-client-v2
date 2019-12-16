import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children: any;
}

const wrapperStyle: CSSProperties = {
    height: 'fit-content',
    left: '50%',
    maxWidth: '450px',
    minWidth: '250px',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
};

const DialogWrapper = ({children}: IProps) => (
    <div style={wrapperStyle}>
        {children}
    </div>
);

export default DialogWrapper;
