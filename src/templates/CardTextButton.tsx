import * as React from "react";
import {CSSProperties} from "react";
import {colorProps, cursorProps} from "../common/types";
import TextLinkButton from "../molecules/TextLinkButton";

interface IProps {
    to?: string;
    cursor: cursorProps;
    color: colorProps;
    onClick?: any;
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

const CardTextButton = (props: IProps) => {
    return (
        <div style={buttonContainerStyle} onClick={props.onClick}>
            <div style={buttonLayerStyle}>
                <TextLinkButton to={props.to} color={props.color} cursor={props.cursor}>
                    {props.children}
                </TextLinkButton>
            </div>
        </div>
    );
};

export default CardTextButton;