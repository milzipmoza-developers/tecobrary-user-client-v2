import * as React from "react";
import {CSSProperties} from "react";
import {colorProps, cursorProps} from "../common/types";
import TextLinkButton from "../molecules/TextLinkButton";

interface IProps {
    to: string;
    cursor: cursorProps;
    color: colorProps;
    children: string;
}

const buttonContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '4px',
    marginRight: '12px',
    width: '100%',
};

const buttonLayerStyle: CSSProperties = {
    alignSelf: 'flex-end',
    padding: '4px'
};

const CardTextLinkButton = ({to, cursor, color, children}: IProps) => {
    return (
        <div style={buttonContainerStyle}>
            <div style={buttonLayerStyle}>
                <TextLinkButton to={to} color={color} cursor={cursor}>
                    {children}
                </TextLinkButton>
            </div>
        </div>
    );
};

export default CardTextLinkButton;