import * as React from "react";
import {Link} from "react-router-dom";
import CardButtonText from "../atoms/CardButtonText";
import {colorProps, cursorProps} from "../atoms/types";

interface IProps {
    to: string;
    cursor: cursorProps;
    color: colorProps;
    children: string;
}

const linkStyle = {
    textDecoration: 'none'
};

const TextLinkButton = ({to, cursor, color, children}: IProps) => {
    return (
        <Link to={to} style={linkStyle}>
            <CardButtonText cursor={cursor} color={color}>
                {children}
            </CardButtonText>
        </Link>
    );
};

export default TextLinkButton;