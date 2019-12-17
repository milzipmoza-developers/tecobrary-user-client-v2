import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    onClick?: any;
    children: any;
}

const backgroundStyle: CSSProperties = {
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 0,
};

const DrawerBackground = ({onClick, children}: IProps) => (
    <div style={backgroundStyle} onClick={onClick}>
        {children}
    </div>
);

export default DrawerBackground;