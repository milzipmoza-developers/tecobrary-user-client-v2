import * as React from "react";
import {colorProps, cursorProps} from "./types";

interface IProps {
    children: string;
    cursor: cursorProps;
    color: colorProps;
}

const buttonColoredStyle = (color: colorProps, cursor: cursorProps) => ({
    color,
    cursor,
    fontSize: '16px',
    fontWeight: 500,
});

const CardButtonText = ({color, cursor, children}: IProps) => (
    <div style={buttonColoredStyle(color, cursor)}>
        {children}
    </div>
);

export default CardButtonText;