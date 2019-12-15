import * as React from "react";
import {CSSProperties} from "react";

interface IProps {
    children: string;
}

const messageStyle: CSSProperties = {
    fontWeight: 'lighter',
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
};

const CardMessageHolder = ({children}: IProps) => (
    <div style={messageStyle}>
        {children}
    </div>
);

export default CardMessageHolder;