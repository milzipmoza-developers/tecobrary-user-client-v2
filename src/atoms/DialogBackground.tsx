import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children: any;
}

const backgroundStyle: CSSProperties = {
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    height: '100%',
    left: '0',
    position: 'fixed',
    top: '0',
    width: '100%',
};

const DialogBackground = ({children}: IProps) => (
    <div style={backgroundStyle}>
        {children}
    </div>
);

export default DialogBackground;